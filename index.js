const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Jenkin my first project test check with EPP.');
});

app.get('/products', (req, res) => {
    res.send('product data will come here');
});

app.listen(3000, ()=> console.log('Listening on port 3000....'));
