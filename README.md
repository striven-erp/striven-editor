<h1 align="center">Striven Editor</h1>

<p align="center">
    <img src="./striven-editor.gif" alt="stirven-editor" />
</p>

<p align="center">
<img src="https://img.shields.io/npm/v/@striven-erp/striven-editor" alt="version">
<img src="https://img.shields.io/github/issues/striven-erp/striven-editor" alt="GitHub issus">
<img src="https://img.shields.io/github/languages/top/striven-erp/striven-editor" alt="GitHub top language">
<img src="https://img.shields.io/github/size/striven-erp/striven-editor/dist/striveneditor.js" alt="GitHub file size in bytes">
</p>

## Getting Started

### Install Package

```sh
$ npm install striven-editor
```

### Initialize Editor

```js
import { StrivenEditor } from 'striven-editor';

const editor = new StrivenEditor(editorEl);
```

### Passing Options to the Editor

```js
import StrivenEditor from 'striven-editor';

const editor = new StrivenEditor(editorEl, { toolbarHide: true, toolbarBottom: true });
```

## Fetching Meta Data on Link Insertions

To fetch meta data from links that are pasted or inserted into the editor, you must set up a back end utility to fetch the data and send it back to your client. For a node server, we recommend using [metascraper](https://metascraper.js.org/#/) on your server. See the example below for setting this up with express.

```js
const got = require('got');
const app = require('express')();
const bodyParser = require('body-parser');
const metascraper = require('metascraper')([
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-title')(),
    require('metascraper-url')()
]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/meta', (req, res) => {
    const targetUrl = req.body.targetUrl;
    if(targetUrl) {
        (async () => {
            const { body: html, url } = await got(targetUrl);
            const metadata = await metascraper({ html, url });
            res.send(metadata);
        })()
    } else {
        res.sendStatus(400);
    }
})

app.listen(8080, () => console.log('Server is on.'));
```

Your editor should look something like this.

```js
const editor = new StrivenEditor(editorEl, { metaUrl: 'http://localhost:8080/meta' });
```

### Meta Data POST Request

Here is an example of what the editor uses for the client to make a ```POST``` request to the server.

```js
fetch(this.options.metaUrl, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetUrl: url })
}).then((res) => res.json())
```

## Editor Options

|Option|Type|Default|Description|
|:-:|:-:|:-:|:-:|
|toolbarHide|```Boolean```|```false```|Enable the toolbar slide animation|
|toolbarBottom|```Boolean```|```false```|Render the toolbar beneath the editor|
|minimal|```Boolean```|```false```|Display minimal editor options|
|onToolbarSend|```Function```|```null```|Handler for when the send icon is clicked. If defined, show the toolbar send icon.|
|metaUrl|```String```|```null```|An endpoint to make a ```POST``` request for a urls metadata. <br /> See [Fetching Metadata](#meta-data-post-request)|
|extensions|```Array``` of ```String```|```[ ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf",".tif", ".jpeg", ".jpg", ".gif", ".bmp", ".txt", ".csv", ".png", ".msg", ".wav", ".mp3", ".mp4", ".zip", ".rtf", ".eps", ".ai", ".psd", ".avi", ".mov", ".wmv", ".cfg", ".wss", ".vsd", ".vsdx", ".tsd", ".lic" ]```|An array of file extensions allowed for upload|
|uploadOnPaste|```Boolean```|```false```|Enable uploading images on paste.|

## Editor Methods

|Method|Return Type|Description|
|:-:|:-:|:-:|
|getFiles|```Array``` of ```File```|Returns an Array of Files attached to the editor|
|getContent|```String```|Returns an HTML String of the editor's contents|
|getRange|```Range```|Get the current range of the window at index ```0```|
|attachFile(```File```)|None|Attaches given file to the editor|
