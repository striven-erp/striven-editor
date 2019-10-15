# CONTRIBUTING

Anyone can contribute to the Striven WYSIWYG editor. Please open an issue for any feature requests, bug fixes, and enhancements that you would like to be implemented into the editor. Keep in mind that this editor has been tailored to the needs of the Striven ERP Platform, so some requests may not be fulfillable.


Please open all pull requests to the ```dev``` branch.

## Install Dependencies

```sh
$ npm install
```

```sh
$ cd demo && npm install
```

## Symlink Development Package

Initialize ```striven-editor``` symlink.

```sh
$ npm link
```

Symlink ```striven-editor``` in the development environment.

```sh
$ npm link striven-editor
```

## Start Webpack

Run webpack in watch mode.

```sh
$ npm run dev
```

## Start Development Server

Start the development server in ```demo``` and go to ```http://localhost:8080/``` to begin developing.

```sh 
$ npm start
```

## Testing with Meta Data Extraction

Start the metadata server.

```sh
$ npm run meta-server
```

Pass the ```metaUrl``` to the editor.

```js
this.editor = new StrivenEditor(this.$refs.editor, { metaUrl: 'http://localhost:4200/meta' })
```
