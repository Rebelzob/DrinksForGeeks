const express = require('express');
const router = express.Router();

router.get('/:idProduct', (req, res) => {
    res.send('This is the product ' + req.params.id)
})

router.get('/:idProduct/comments/:idComments?', (req, res) => {
    if (req.params.idComments == undefined) {
        res.send('This is the product ' + req.params.idProduct + ' and all the comments')
    } else {
        res.send('This is the product ' + req.params.idProduct + ' and the comment ' + req.params.idComments)
    }
})

module.exports = router;