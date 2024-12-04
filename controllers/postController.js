//importo list.js
const postData = require('../data/postData');

function index(req, res) {
    //res.send('Lista dei post');
    res.json(postData);
};

function show(req, res) {
    const index = parseInt(req.params.id)
    const objId = postData.find((element) => index === element.id)
    if (objId) {
        //res.send('Dettagli del post ' + req.params.id);
        res.json(objId);
    } else {
        res.send("Post non esistente!")
    }
};

function store(req, res) {
    res.send('Creazione nuovo post');
};

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
};

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
};

function destroy(req, res) {
    //res.send('Eliminazione del post' + req.params.id);
    const id = parseInt(req.params.id);
    const toBeDeleted = postData.find((element) => id === element.id);

    //In caso il post inserito non esiste
    if (!toBeDeleted) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post da eliminare non trovata"
        })
    }

    //Rimuovo il post dall'array presente in postData.js
    postData.splice(postData.indexOf(toBeDeleted), 1);

    // Restituiamo lo status corretto
    res.sendStatus(204)
};

module.exports = { index, show, store, update, modify, destroy };