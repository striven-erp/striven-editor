<h1 align="center">Striven Editor</h1>

<p align="center">
    <img src="./striven-editor.gif" alt="stirven-editor" />
</p>

## Getting Started

### Install Dependencies

```sh
$ npm install striven-editor @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
```

### Initialize Editor

```js
import StrivenEditor from 'striven-editor';

const editor = new StrivenEditor(editorEl);
```

### Passing Options to the Editor

```js
import StrivenEditor from 'striven-editor';

const editor = new StrivenEditor(editorEl, { toolbarHide: true, toolbarBottom: true });
```

## Editor Options

|Option|Type|Default|Description|
|:-:|:-:|:-:|:-:|
|toolbarHide|```Boolean```|```false```|Enable the toolbar slide animation|
|toolbarBottom|```Boolean```|```false```|Render the toolbar beneath the editor|
|minimal|```Boolean```|```false```|Display minimal editor options|
|onToolbarSend|```Function```|```null```|Handler for when the send icon is clicked. If defined, show the toolbar send icon.|
|metaUrl|```String```|```null```|An endpoint to make a ```POST``` request for a urls metadata. <br /> See [Fetching Metadata](#)|
|extensions|```Array``` of ```String```|```[ ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf",".tif", ".jpeg", ".jpg", ".gif", ".bmp", ".txt", ".csv", ".png", ".msg", ".wav", ".mp3", ".mp4", ".zip", ".rtf", ".eps", ".ai", ".psd", ".avi", ".mov", ".wmv", ".cfg", ".wss", ".vsd", ".vsdx", ".tsd", ".lic" ]```|An array of file extensions allowed for upload|

## Editor Methods

|Method|Return Type|Description|
|:-:|:-:|:-:|
|getFiles|```Array``` of ```File```|Returns an Array of Files attached to the editor|
|getContent|```String```|Returns an HTML String of the editor's contents|
|getRange|```Range```|Get the current range of the window at index ```0```|
|attachFile(```File```)|None|Attaches given file to the editor|
