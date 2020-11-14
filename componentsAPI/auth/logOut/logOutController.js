const UserModel = require('./../usersModel');

module.exports.logOutController = async (req, res) => {
    let userId = req.body.userId;
    const user = await UserModel.findOne({userId});
    if (user) {
        // Обнуление токена обновления в бд
        user.refreshToken = '';
        try {
            user.save(/*err => err && console.log(err)*/);
            // Обнуление токена обновления в cookie
            res.setHeader('Set-Cookie', `refreshToken=null; HttpOnly`);

            let options = {
                message: "Refresh token cleared.",
                isAuth: false
            };
            res.status(200).json(options)
        } catch (err) {
            console.log(err);
            res.status(404).json({message: "Server error."})
        }
    } else {
        // Нет в базе пользователя с таким id
        res.status(404).json({message: "This user is not registered"})
    }
};


