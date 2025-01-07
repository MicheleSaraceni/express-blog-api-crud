//------------IMPORT------------
// Express
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();
// Router
const postsRouter = require('./routers/posts.js');
// Data e orario di accesso (esempio di una middleware scritta da me)
const checkTime = require('./middleware/checkTime.js')
//Error 404 - Pagina non trovata
const notFound = require('./middleware/notFound.js')

//--------Setto la porta---------
const PORT = process.env.PORT || 3000;


//----------MIDDLEWARE-----------
// Attivo CORS per tutte le rotte
server.use(cors());
// Registro le rotte publiche
server.use(express.static("public"));
// Registro ...
server.use(express.json());
// Registro il router
server.use("/posts", postsRouter);
// Registro il checkTime
server.use(checkTime);

//-------------------------------------------------------------


// Specializzo il server a rispondere alla richiesta GET
server.get("/", (req, res) => {
    checkTime;
    res.send("<h1>Server del mio Blog</h1>");
});

// Registro il notFound
server.use(notFound);

// Collego il mio server alla porta
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});