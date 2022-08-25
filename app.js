const express = require('express');
const app = express();
const mainRouter = require('./src/routes/mainRouter');
const path = require('path')

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

