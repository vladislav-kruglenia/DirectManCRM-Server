const jwt = require('jsonwebtoken');
const UserModel = require('../usersModel');
const key = require('./../../../config/keys');
const tokensGeneration = require('./../tokensGeneration').tokensGeneration;


module.exports.refreshTokenController = async (req, res) => {
    // Извлечение из куки файлов
    let refreshToken = req.cookies.refreshToken;

    // Поиск пользователя с таким токеном
    let user = await UserModel.findOne({refreshToken});
    if (user) {
        try {
            // Проверка типа токена
            let payload = jwt.verify(refreshToken, key.jwt);
            payload.type !== "refresh" && errorStatus(res, "Invalid token.");

            // Создание и отправка новых токенов клиенту
            tokensGeneration(res, user);

        } catch (e) {
            if (e instanceof jwt.TokenExpiredError) errorStatus(res, "Token expired.");
            else if (e instanceof jwt.JsonWebTokenError) errorStatus(res, "Invalid token.")
        }
    } else errorStatus(res, "User is not auth.")
};

let errorStatus = (res, message) => {
    return res.status(400).json({
        message: message,
        isAuth: false
    })
};


