const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 2000');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get('/productCart.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
});
app.get('/productDetail.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});