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
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non esistente"
        });
    };
};

function store(req, res) {
    //res.send('Creazione nuovo post');
    //console.log(req.body);
    const { id, title, content, img, tags } = req.body;

    const postExists = postData.find((post) => post.id === id);
    if (postExists) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Un post con questo ID esiste già."
        });
    }

    const newPost = { id, title, content, img, tags };
    postData.push(newPost);

    return res.status(201).json({
        status: 201,
        message: "Nuovo post creato con successo!",
        data: newPost
    });
};

function update(req, res) {
    //res.send('Modifica integrale del post ' + req.params.id);
    const id = parseInt(req.params.id);
    const { title, content, img, tags } = req.body;

    const postId = postData.findIndex((post) => post.id === id);
    if (postId === -1) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato."
        });
    }

    const updatedPost = { ...postData[postId], title, content, img, tags };
    postData[postId] = updatedPost;

    return res.status(200).json({
        status: 200,
        message: "Post aggiornato con successo!",
        data: updatedPost
    });
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
    return res.json({
        status: 204,
        message: "Post " + id + " eliminato!"
    });
};

module.exports = { index, show, store, update, modify, destroy };