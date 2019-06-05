module.exports = app => {
    app.get('/users', (req, res) => {
        res.send(req.user);
    });
};