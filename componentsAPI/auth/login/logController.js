const bcrypt = require('bcryptjs');
const UserModel = require('../usersModel');
const tokensGeneration = require('./../tokensGeneration').tokensGeneration;


module.exports.logController = async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email});
    if (user) {
        //Сравнение паролей
        const passwordResult = bcrypt.compareSync(req.body.password, user.password);
        if (passwordResult) {
            tokensGeneration(res, user);
        } else {
            // Неверный пароль
            res.status(401).json({message: "Passwords do not match."})
        }
    } else {
        // Нет в базе пользователя с такой почтой
        res.status(404).json({message: "This user is not registered"})
    }
};

/*module.exports.tokensGeneration = (req, res, candidate) =>{
    // Генерация токена
    const accessToken = createToken(req.body.email, candidate._id, key.jwt, "6h", 'access');
    const refreshToken = createToken(req.body.email, candidate._id, key.jwt, "24h", 'refresh');
    candidate.refreshToken = refreshToken;
    candidate.save(err => err && console.log(err));
    res.cookie('refreshToken', refreshToken);
    return res.status(200).json({
        token: `Bearer ${accessToken}`,
        message: "Token created"
    });
};

let createToken = (email, userId, keyJwt, expiresIn, tokenType) => {
    return jwt.sign({
        email: email,
        userId: userId,
        type: tokenType,
    }, keyJwt, {expiresIn: expiresIn})
};*/


