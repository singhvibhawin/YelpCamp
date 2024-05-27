module.exports = func => {
    return (req, res, next) => {
        func(err, req, res, next).catch(next);
    }
}