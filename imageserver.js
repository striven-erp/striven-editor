const express = require('express');
const app = express();
const PORT = 4200;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const shortid = require('shortid');

app.use(bodyParser.json());
app.use(cors());

app.get('/images/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', req.params.name));
})

app.post('/image', (req, res) => {
    const imageEncoding = req.body.imageEncoding;
    try {
        const base64Image = imageEncoding.split(';base64,').pop();
        const imageId = shortid.generate();

        fs.writeFile(path.join(__dirname, 'images', `${imageId}.png`), base64Image, {encoding: 'base64'}, function(err) {
            console.log('File created');
            res.send({ imageRef: `http://localhost:${PORT}/images/${imageId}.png` });
            err && console.log(err);
        });
    } 
    catch (e) {
        res.sendStatus(400);
    }
})

app.listen(PORT, () => console.log(`Image server open on port: ${PORT}`))