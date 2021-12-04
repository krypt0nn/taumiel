import path from './path';

// @ts-expect-error
const _window = window.__TAURI__.window;

interface WindowOptions
{
    label?: string
    url: string

    title?: string
    show?: boolean

    position?: {
        center?: boolean
        x?: number
        y?: number
    }

    sizes?: {
        width?: number
        height?: number

        minWidth?: number
        minHeight?: number

        maxWidth?: number
        maxHeight?: number
    }

    resizable?: boolean
    fullscreen?: boolean
    focus?: boolean
    transparent?: boolean
    maximized?: boolean
    visible?: boolean
    decorations?: boolean
    alwaysOnTop?: boolean
    skipTaskbar?: boolean
}

export default class windows
{
    public static get app()
    {
        return _window.appWindow();
    }

    public static get current()
    {
        return _window.getCurrent();
    }

    /**
     * Create window
     * @param options - window options
     */
    public static create(options: WindowOptions)
    {
        let label = options.label || path.basename(options.url, true);

        /**
         * Generate unique label
         * if it already exists
         */
        if (options.label === undefined)
        {
            let isAlreadyExists = true,
                tempLabel = label,
                num = 0;

            while (isAlreadyExists)
            {
                isAlreadyExists = false;

                for (let window in _window.getAll()) // @ts-expect-error
                    if (window.label == tempLabel)
                    {
                        isAlreadyExists = true;

                        tempLabel = label + (++num);
                    }
            }

            label = tempLabel;
        }

        if (options.show === false)
            options.visible = false;

        const window = new _window.WebviewWindow(label, {
            ...options,
            ...options.sizes,
            ...options.position
        });

        if (options.show === true)
            window.once('tauri://created', () => window.show());

        return window;
    }

    public static getAll()
    {
        return _window.getAll();
    }

    public static async availableMonitors()
    {
        return _window.availableMonitors();
    }

    public static async currentMonitor()
    {
        return _window.currentMonitor();
    }

    public static async primaryMonitor()
    {
        return _window.primaryMonitor();
    }
}
