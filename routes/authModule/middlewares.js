const sessionMiddleware = (req, res, next) => {
    const session = req.session;
    // console.log(session);
    next();
};

module.exports = {
    sessionMiddleware,
};
