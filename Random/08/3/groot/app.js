const express = require('express');
const app = express();

const nullData = { "error": "I am Groot!" }


app.get('/groot', (req, res) => {
    // TODO: implement this method
    if (req.query.message === '') {
        res.status(403).json({
            error: "I am Groot!"
        })
    }else{
      res.status(200).json({
            "recieved": req.query.message,
            "translated": 'I am Groot!'
        })
    }
});

module.exports = app;

//?msg=
// <a href="/posts/delete?id=<%= post.ID %>