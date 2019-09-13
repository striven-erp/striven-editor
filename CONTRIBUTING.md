# CONTRIBUTING

Anyone can contribute to the Striven WYSIWYG editor. Please open an issue for any feature requests, bug fixes, and enhancements that you would like to be implemented into the editor. Keep in mind that this editor has been tailored to the needs of the Striven ERP Platform, so some requests may not be fulfillable.

## Install Dependencies

```sh
$ npm install
```

## Symlink Development Package

Initialize ```striven-editor``` symlink.

```sh
$ npm link
```

Symlink ```striven-editor``` in the development environment.

```sh
$ cd demo && npm link striven-editor
```

## Start Webpack

Run webpack in watch mode.

```sh
$ npx webpack -w
```

## Start Development Server

Start the development server in ```demo``` and go to ```http://localhost:8080/``` to begin developing.

```sh 
$ cd demo && npm start
```
