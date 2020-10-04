const mongoose = require('mongoose');
const app = require('./componentsAPI/app');
const key = require('./config/keys');

mongoose.connect(
    key.mongoURL,
    {
        useUnifiedTopology: true,  // установка опций
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(5000, () => console.log('Listening on port 5000...'));
    })
    .catch((e) => console.log(e));
