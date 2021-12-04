// @ts-expect-error
const _path = window.__TAURI__.path;

class folders
{
    /**
     * Application-related
     */
    public static async app(): Promise<string>
    {
        return _path.appDir();
    }

    public static async current(): Promise<string>
    {
        return _path.currentDir();
    }

    /**
     * User's special folders
     */
    public static async audio(): Promise<string>
    {
        return _path.audioDir();
    }

    public static async documents(): Promise<string>
    {
        return _path.documentsDir();
    }

    public static async download(): Promise<string>
    {
        return _path.downloadDir();
    }

    public static async picture(): Promise<string>
    {
        return _path.pictureDir();
    }

    public static async video(): Promise<string>
    {
        return _path.videoDir();
    }

    public static async desktop(): Promise<string>
    {
        return _path.desktopDir();
    }

    /**
     * System
     */

    public static async cache(): Promise<string>
    {
        return _path.cacheDir();
    }

    public static async config(): Promise<string>
    {
        return _path.configDir();
    }

    public static async data(): Promise<string>
    {
        return _path.dataDir();
    }

    public static async localData(): Promise<string>
    {
        return _path.localDataDir();
    }

    public static async public(): Promise<string>
    {
        return _path.publicDir();
    }

    public static async resource(): Promise<string>
    {
        return _path.resourceDir();
    }
}

export default class path
{
    public static readonly separator = _path.sep; // / or \
    public static readonly delimiter = _path.delimiter; // ; or :

    /**
     * Make path from list of names
     * @param paths - list of folders names
     * @returns path to file
     */
    public static join(...paths: string[]): string
    {
        paths = paths.join(this.separator)
            .replaceAll(this.separator + this.separator, this.separator)
            .split(this.separator);

        let cleanPath: string[] = [];

        paths.forEach((path) => {
            if (path == '..')
                cleanPath.pop();
            
            else if (path != '.')
                cleanPath.push(path);
        });

        return cleanPath.join(this.separator);
    }

    /**
     * Get file name from the path
     * @param path path to file
     * @param removeExt if true - then file's extension will be removed
     * @returns file name
     */
    public static basename(path: string, removeExt: boolean = false): string
    {
        let basename = undefined;

        while (basename === undefined)
            basename = path.split(this.separator).pop();

        if (removeExt)
        {
            basename = basename.split('.');

            if (basename.length == 1)
                basename = basename[0];

            else basename = basename.slice(0, -1).join('.');
        }

        return basename;
    }

    /**
     * Get file's extension name
     * @param filename
     * @returns file's extension
     */
    public static extname(filename: string): string|undefined
    {
        return filename.split('.').pop();
    }

    /**
     * Get parent directory path
     * @param path
     * @returns path to the parent directory
     */
    public static dirname(path: string): string
    {
        let parts = path.split(this.separator);

        while (parts.pop() == '');

        return parts.join(this.separator);
    }

    public static readonly paths = folders;
}

export { folders };
