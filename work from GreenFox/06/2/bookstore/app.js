const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const app = express();
const port = process.env.PORT;

const bookRouter = require('./routes/bookstore.js');
app.use(express.json());
app.use('/books', bookRouter);    // just another middleware


app.get('/', function(req, res){
    res.send('this is the homepage use /books');
})


app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`App is listening on port: ${port}`);
});



