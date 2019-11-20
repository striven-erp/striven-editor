# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.7.0]

### Changed

- iOS Safari attachment fix
- Any links inserted into the editor will open a new tab

## [2.7.0]

### Changed

- Edge support fixes

## [2.5.0]

### Changed

- Minimal mode now supports custom toolbar options
- Editor resizes in minimal mode based off of offset width
- Floating menu options are consistently responsive

## [Released]

## [2.4.0] - 2019-11-1

### Added

- Minimal options toolbar responsive text decoration menu
- Covert valid url text into links on paste
- Pass a handler for when valid files are attached to the editor

## [2.3.0] - 2019-10-31

### Added

- Toolbar now reset appropriately and displays state more responsive
- Set the editors range instance helper method

### Changed

- Firefox editors will now insert an entire link when no selection is in the range

## [2.2.0] - 2019-10-25

### Changed

- Custom Button is not Toolbar Tempalte and can be used to manage the remaining real estate of the toolbar
- Editor only initializes areas that are required by the enabled options
- Toolbar now uses CSS transition isntead of setInterval

## [2.1.5] - 2019-10-24

### Added

- Image menu popup animations

### Changed

- Custom Toolbar options for Knockout and Vue

## [2.1.0] - 2019-10-24

### Added

- Invalid file handler option
- Drag and drop file dropzone style

### Changed

- Dist folder is no longer distributed in the repo
- Made fixes for the Knockout binding
- Made fixed for the Vue component

## [2.0.5] - 2019-10-23

### Added

- Invalid file handler option
- Drag and drop file dropzone style

### Changed

- File titles use ```<p>``` and ```px```
- Custom toolbar button can now be templated and passed as a DOM node

## [2.0.4] - 2019-10-22

### Changed

- More Vue v-model support (listen for changes)

## [2.0.3] - 2019-10-22

### Changed

- Vue v-model support

## [2.0.2] - 2019-10-22

### Changed

- Vue options hotfix

## [2.0.1] - 2019-10-22

### Changed

- Vue props hotfix

## [2.0.0] - 2019-10-22

### Added
- Submit on enter
- Clear files
- Submit to enter option
- Supports Firefox, Chrome, Safari, Edge
- Added Close button to close image and link popup
- Image and link popup can be closed using Esc key

### Changed
- Extracted styles to css
- Toolbar slide animation timeout is reduced
- Fixed vertical spacing on the toolbar icons
- Toolbar does not auto hide when any popups are open inside

## [1.3.0] - 2019-10-01

### Added
- State of the editor feedback (toolbar option hightlighting)
- Set the color for options that have active state in the editor
- Image and Link menu animations
- Manually invoke image and link animation

### Changed
- Fixed the editor height bug (grow and overflow)

## [1.2.4] - 2019-09-19
### Added
- customToolbarOption
- imageUrl to make a POST request for referencing non-encoded images

### Changed
- Fixed the insertImage resize bug

## Removed
- onToolbarSend is now a customToolbarOption (more configuration but customizable)

## [1.2.3] - 2019-09-19
### Added
- Placeholder option
- Clear formatting option
- Sanitize pasted html

## [1.2.2] - 2019-09-19
### Changed
- Bug fixes with toolbar options and menus

## [1.2.1] - 2019-09-19
### Added
- Pass custom toolbar options with custom handlers
- Pass an array of toolbar options

## [1.2.0] - 2019-09-18
### Added
- Option to change the toolbar options fill color

### Changed
- Added a new milestone!
- Zero Dependencies!

### Removed
- FontAwesome SVG Imports

## [1.1.0] - 2019-09-18
### Added
- Full size toolbar options
- NPM Package

### Changed
- GitHub Pages!

### Removed
- [Tributejs](https://github.com/zurb/tribute) is **not** a dependency.

## [1.0.0] - 2019-09-13
### Added
- Minimal Striven Editor
- Open Source Project

### Changed
- [Tributejs](https://github.com/zurb/tribute)(mentions) has been extracted out of the editor. The editor is a ```contenteditable``` div so just attach an instance of ```Tribute``` to it wherever you'd like.

### Removed
- Nothing! This is an init.
