const express = require('express');


const server = express();



server.get('/', (req,res) => {
    return res.send('welcome to express server');
})

//my static files are in public folder which can be assessed directly
server.use(express.static('public'));

server.listen(3300, () => {
    console.log("server is listening on 3300");
})