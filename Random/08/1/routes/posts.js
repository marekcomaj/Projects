const express = require('express');
const router = express.Router();
const connection = require('./db/db.js');

const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//show all the posts
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM posts';
    connection.query(sql, (err, result) =>{
       if(err) throw err;
       res.render('posts/index', {posts: result})
    })
 })
 
 //create new post page
 router.get('/create', (req,res) =>{
       res.render('posts/create', {post:{}})
 })
 
 //Delete posts from database
 router.get('/delete', (req,res) =>{
    connection.query('DELETE FROM posts WHERE id = ?', req.query.id, (err, rs) =>{
       res.redirect('/posts') 
    })
 })
 

 //create new post MYSQL insert post
 router.post('/create', urlencodedParser, (req,res) =>{
    //var sql = "INSERT INTO posts (Title, Describtion) VALUES ('?', '?')";
    connection.query("INSERT INTO `posts` (`Title`, `Describtion`) VALUES ('"+req.body.Title+"', '"+req.body.Describtion+"')", (err, rs) =>{
       res.redirect('/posts')
    })
 })

 //Render selected post for editing
router.get('/edit', (req,res) =>{
    connection.query('SELECT * FROM posts WHERE id = ?', req.query.id, (err,rs) =>{
        res.render('posts/create', {post: rs[0]})
    })
})

//Upvote link to increase score
router.get('/upvote', (req,res) =>{
   connection.query('UPDATE posts SET score = score + 1 WHERE id = ?;', req.query.id, (err, rs) =>{
      res.redirect('/posts')
   })
})


//Downvote link to decrease score
router.get('/downvote', (req,res) =>{
   connection.query('UPDATE posts SET score = score - 1 WHERE id = ?;', req.query.id, (err, rs) =>{
      res.redirect('/posts')
   })
})

//Edit page Updating MYSQL database
router.post('/edit', urlencodedParser, (req,res, next) =>{
   connection.query("UPDATE posts SET Title ='"+req.body.Title+"', Describtion ='"+req.body.Describtion+"'  WHERE id ='"+req.query.id+"'",(err, rs) => {
      res.redirect('/posts');
   })
})


module.exports = router;

