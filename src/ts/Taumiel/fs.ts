// @ts-expect-error
const _fs = window.__TAURI__.fs;

// @ts-expect-error
const _path = window.__TAURI__.path;

// @ts-expect-error
const tauri = window.__TAURI__.tauri;

export default class fs
{
    /**
     * Copy file
     * @param src - source file
     * @param dest - destination file
     */
    public static async copy(src: string, dest: string): Promise<void>
    {
        return _fs.copyFile(src, dest);
    }

    /**
     * Checks whether file or folder exists
     * @param path - path to the folder or the file
     * @returns Promise<boolean>
     */
    public static async exists(path: string): Promise<boolean>
    {
        return new Promise((resolve) => {
            _path.join(path)
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }

    /**
     * Create new file if it doesn't exist
     * @param path - path to file
     * @param data - data to write
     */
    public static createFile(path: string, data: string = "")
    {
        return tauri.invoke('create_file', {
            path: path,
            data: data
        });
    }

    /**
     * Create directory
     * @param dir - path to directory
     * @param recursive - if it should create all folders recursively
     */
    public static createDir(dir: string, recursive: boolean = false): Promise<void>
    {
        return _fs.createDir(dir, {
            recursive: recursive
        });
    }

    /**
     * Write data to file
     * @param path - path to file
     * @param data - data to write
     */
    public static async writeFile(path: string, data: string): Promise<string|void>
    {
        return new Promise((resolve, reject) => {
            _fs.writeFile({
                path: path,
                contents: data
            })
            .then(() => resolve())
            .catch(() => {
                this.createFile(path, data)
                    .then(() => resolve())
                    .catch((err: string) => reject(err));
            });
        });
    }

    /**
     * Remove folder or file
     * @param path - path to folder or file
     */
    public static async remove(path: string): Promise<void>
    {
        return new Promise((resolve) => {
            _fs.removeFile(path)
                .then(() => resolve())
                .catch(() => {
                    _fs.removeDir(path).then(() => resolve());
                });
        });
    }

    /**
     * Rename file
     * @param from - path to file
     * @param to - new path to file
     */
    public static async renameFile(from: string, to: string): Promise<void>
    {
        return _fs.renameFile(from, to);
    }
}
