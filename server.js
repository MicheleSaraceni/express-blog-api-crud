// importo express
const express = require('express');
const server = express();

//Middleware
server.use(express.json());

// setto la porta
const PORT = 3000;


//setto le rotte publiche
server.use(express.static("public"));


// specializzo il server a rispondere alla richiesta GET
server.get("/", (req, res) => {
    res.send("<h1>Server del mio Blog</h1>");
});


//setto il router
const postsRouter = require('./routers/posts.js');
server.use("/posts", postsRouter);

/*
server.get("/bacheca", (req, res) => {
    console.log(res.list);

    const responseObject = {
        lunghezza: list.length,
        list
    }

    res.json(responseObject);
});
*/

server.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found !</h1>');
})


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});