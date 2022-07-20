
const service = require("./services/loginService.js");

class loginControler {

    async login (req, res) {

        service.authenticate(req.body)
        .then( user => user ? res.json(user) : res.status(400).json({ message: "usuario ou senha invalidos!"}))
        .catch(console.log);
    };
};

module.exports = new loginControler();