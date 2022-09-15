//env files
const dotenv = require('dotenv').config()

//imports
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const JSONParser = bodyParser.json();


const postsRouter = require('./routes/posts')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))

//using posts
app.use('/posts', postsRouter);

//sql
const dataRouter = require('./routes/db/db');
const connection = require('./routes/db/db');
app.use(express.json());


//set Views
app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
      res.render('welcome')
})

app.listen(port, () => console.info(`listening on port ${port}`))
