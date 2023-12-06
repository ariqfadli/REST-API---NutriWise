const logRequest = (req, res, next) => {
    console.log('request on PATH :', req.path);
    next();
};

module.exports = logRequest;