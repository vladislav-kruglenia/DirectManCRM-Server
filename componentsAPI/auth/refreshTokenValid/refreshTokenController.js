const jwt = require('jsonwebtoken');
const UserModel = require('../usersModel');
const key = require('./../../../config/keys');
const tokensGeneration = require('./../tokensGeneration').tokensGeneration;


module.exports.refreshTokenController = async (req, res) => {
    // Извлечение из куки файлов
    let refreshToken = req.cookies.refreshToken;

    // Поиск пользователя с таким токеном
    let user = await UserModel.findOne({refreshToken});
        if (user){
            try{
                // Проверка типа токена
                let payload = jwt.verify(refreshToken, key.jwt);
                payload.type !== "refresh" && res.status(400).json({message: "Invalid token."});

                // Создание и отправка новых токенов клиенту
                tokensGeneration(res, user);
            } catch(e){
                if(e instanceof jwt.TokenExpiredError) {
                    res.status(400).json({message: "Token expired."})
                } else if(e instanceof jwt.JsonWebTokenError){
                    res.status(400).json({message: "Invalid token."})
                }

            }
        } else {
            res.status(400).json({message: "User is not auth."})
        }
};


