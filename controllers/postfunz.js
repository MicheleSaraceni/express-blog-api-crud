//importo list.js
const list = require('../data/list');

function index(req, res) {
    //res.send('Lista dei post');
    res.json(list);
};

function show(req, res) {
    const index = parseInt(req.params.id)
    const objId = list.find((element) => index === element.id)
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
    res.send('Eliminazione del post' + req.params.id);
};

module.exports = { index, show, store, update, modify, destroy };