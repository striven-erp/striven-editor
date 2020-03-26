const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/jsdoc'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/jsdoc/global.html');  
})

app.listen(3000, () => console.log('EDITOR DOCUMENTATION ON http://localhost:3000'));
