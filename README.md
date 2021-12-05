# Taumiel - a Tauri extension

This is an extension of the [Tauri](https://github.com/tauri-apps/tauri) project with some extra functions and blank application

## Requirements

To develop application you must have installed node js. For windows it is available on its [official website](https://nodejs.org/en/), for linux you can download the `node` packet from your packet manager

Also you must have installed Rust programming language bundle

## Installation

```sh
git clone https://github.com/krypt0nn/taumiel ./my-app
cd my-app
npm i
```

## Set up

In these files:

* `package.json`
* `src-tauri/Cargo.toml`
* `src-tauri/tauri.conf.json`

Change these parameters:

* name
* version
* description
* productName
* identifier

## Development

Directory `src` stores your [TypeScript](https://typescriptlang.org) and [SASS](https://sass-lang.com) code. When you run `npm run dev` command in console - they will be compiled to the js and css files inside `public` directory. Then when you will run `npm run bundle` your project will be bundled in `dist` folder by [parcel](https://parceljs.org)

In the `public` stored information about your application - images it uses, html pages and something you want to use. Other directories will not be available in the compiled binaries

Default application page is `public/html/index.html`

To run your application - use `npm start` command. It will automatically run `npm run dev`

To build binaries run `npm run build`

All binaries will appear in the `src-tauri/target/release` directory

## NPM support

Thanks to [parcel](https://parceljs.org), we have [basic node emulation](https://parceljs.org/features/node-emulation) for some node packages like `path` or `https`

You can try to use node packages, but I honestly don't know will they work or not

## Documentation

| Name | Description |
| - | - |
| [tauri.conf.json](https://tauri.studio/en/docs/api/config) | Tauri configuration file |
| [Tauri API](https://tauri.studio/en/docs/api/js/index) | Tauri API such as `fs`, `os`, etc. |

This project brings some custom functions along with `src/ts/Taumiel` library

<br>

Author: [Nikita Podvirnyy](https://vk.com/technomindlp)