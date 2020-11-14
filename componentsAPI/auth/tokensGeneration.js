const jwt = require('jsonwebtoken');
const key = require('./../../config/keys');

module.exports = {
    tokensGeneration(res, user) {
        // Генерация токенов
        const accessToken = createToken(user.email, user.userId, key.jwt, "6h", 'access');
        const refreshToken = createToken(user.email, user.userId, key.jwt, "24h", 'refresh');

        // Сохранение токена обновления в бд
        user.refreshToken = refreshToken;
        user.save(err => err && console.log(err));

        // Упаковка куки файла
        res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; HttpOnly`);

        return res.status(200).json({
            message: "Token created",
            isAuth: true,
            userId: user.userId,
            token: `Bearer ${accessToken}`,
        });
    },
};
let createToken = (email, userId, keyJwt, expiresIn, tokenType) => {
    return jwt.sign({
        email: email,
        userId: userId,
        type: tokenType,
    }, keyJwt, {expiresIn: expiresIn})
};