const express = require('express');
const router = express.Router();
router.use(express.json());
const connection = require('../db.js');

router.get('/', getBooksTitle);    // /books


function getBooksTitle(req, res) {
    const sql = `SELECT book_name FROM BOOK_MAST`;
    connection.query(sql, (error, results) => {
        if (error) {
            res.status(500).send({ message: error });
            return;
        }
        let list = [];
        results.forEach((results) => {
            //console.log(`${results.book_name}`)
            list = list.concat(`${results.book_name}`);
        });
        console.log(list)
        for(let i = 0; i< list.length; i++){
            res.status(200).write(i +'. \t' + list[i]);
            res.status(200).write('\n');
        }
        res.end()
        //res.status(200).send(list);
    });
}



module.exports = router;