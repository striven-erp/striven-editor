# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Released]

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
