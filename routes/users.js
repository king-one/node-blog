const express = require('express');
const router = express.Router();
router.get('/:name', function (req, res) {
    // res.send('hello,express ' + req.params.name)
    res.render('users',{
        blog:{
           title:'node 博客'
        },
        name:req.params.name,
        text:"<h1>你是不是在没事找事</h1>"
    })
})
module.exports = router;