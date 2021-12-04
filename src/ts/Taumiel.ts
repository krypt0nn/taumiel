const {
    app, cli,
    clipboard, process,
    shell, os, http,
    tauri // @ts-expect-error
} = window.__TAURI__;

import fs from './Taumiel/fs';
import path from './Taumiel/path';
import windows from './Taumiel/windows';

export {
    app, cli,
    clipboard, process,
    shell, os, http,
    tauri,

    fs, path, windows
};
