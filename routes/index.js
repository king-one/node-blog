const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
    res.send('hello,express,routes')
})
module.exports = router;