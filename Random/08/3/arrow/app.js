const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    // TODO: implement this method
    if (req.query.distance === '' || req.query.time === '' || !req.query.distance || !req.query.time) {
        res.status(403).json({
            error: "Not given parameters!"
        })
    }else{
      res.status(200).json({
            "distance": req.query.distance,
            "time":  req.query.time,
            "speed": req.query.distance/req.query.time
        })
    }
});

module.exports = app;