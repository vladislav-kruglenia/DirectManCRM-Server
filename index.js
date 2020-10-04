const mongoose = require('mongoose');
const app = require('./componentsAPI/app');

mongoose.connect(
    'mongodb://localhost:27017/DirectMan',
    {
        useUnifiedTopology: true,  // установка опций
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(5000, () => console.log('Listening on port 5000...'));
    })
    .catch((e) => console.log(e));
