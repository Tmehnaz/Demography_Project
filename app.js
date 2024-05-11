const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./dbConnection');
const router = require('./data_collection');

//middleware function
app.use(cors());
app.use(express.json());

app.use('/api/homepage',router);


//PORT Connection
const PORT = process.env.PORT|| 5000;
db.query('SELECT 1').then(()=>{
    console.log("MYSQL DB Connected...");

app.listen(PORT, ()=> {
    console.log(`Server is up and running.. on ${PORT}`);
})

}).catch((err)=>{
    console.log(err);
});