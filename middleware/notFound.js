// pag non trovata ( Error 404)
function notFound(req, res, next) {
    server.all('*', (req, res) => {
        res.status(404).send('<h1>Error 404 - Not Found !</h1>');
    })
    next();
}

module.exports = notFound;