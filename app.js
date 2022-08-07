const express = require('express');
const app = express();
const path = require('path');


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.use(express.static('public'));