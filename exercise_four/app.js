//Import express
const express = require('express') 
//Initiate express to app
const app = express();
//Set the Port
const port = process.env.PORT || 4000; //number variable

//Create base route
app.get('/', (req, res) => res.send("Exercise Four")); 

//Set up app so that it runs when this file is run
app.listen(port, () =>
    console.log(`Example app listening at http://localhost: ${port} `)
    );