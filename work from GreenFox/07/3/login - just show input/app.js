const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))

//set Views
app.set('views', './views');
app.set('view engine', 'ejs')

app.get('', (req, res) => {
   res.render('index')
})

app.post('/login', urlencodedParser, (req, res) => {
    res.render('login', {data: req.body});
 })
 

app.listen(port, () => console.info(`listening on port ${port}`))