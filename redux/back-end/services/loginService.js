const jwt = require("jsonwebtoken");

const db = [
    { username: "adimin", password: "adiministrador" }
];
const authenticate = async ({ username, password }) => {

    const user = db.find( user => user.password === password && user.username === username );

    if (user) {
        const token = await jwt.sign({ username }, 'para_a_segurança_ao_gerar_token_138')

        return {
            token,
            user
        }
    }
};

module.exports = {
    authenticate
}