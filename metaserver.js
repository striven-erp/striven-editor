const express = require('express');
const app = express();
const PORT = 4200;
const path = require('path');
const got = require('got');
const bodyParser = require('body-parser');
const cors = require('cors');

const metascraper = require('metascraper')([
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-title')(),
    require('metascraper-url')()
]);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/meta', (req, res) => {
    const targetUrl = req.body.targetUrl;
    targetUrl && console.log('Fetching meta data from ', targetUrl);

    if(targetUrl) {
        (async () => {
            const { body: html, url } = await got(targetUrl);
            const metadata = await metascraper({ html, url });

            console.log('Sending meta data: \n', metadata);
            res.send(metadata);
        })()
    } else {
        console.log('Sending error 400 back.');
        res.sendStatus(400);
    }
})

app.listen(PORT, () => console.log(`Meta server open on port: ${PORT}`));