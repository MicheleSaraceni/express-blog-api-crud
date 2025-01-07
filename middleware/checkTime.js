function checkTime(req, res, next) {
    const currentTime = new Date().toLocaleString();
    //console.log("Sei entrato nel middleware alle:");
    console.log(currentTime);
    //if (currentTime.includes("13:")){
    //    res.status(503).send("Siamo chiusi");
    //    return;
    //}
    next();
}

module.exports = checkTime;