const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tariffsInfoSchema = new Schema({
    ID: {type: String, required: true},
    directionsAndTariffs: [
        {
            nameDirection: {type: String, default: ""},
            idDirection: {type: Number, default: -1},
            paymentInFull: {type: Boolean, default: true},
            selected: {type: Boolean, default: false},
            namesTariffs: [
                {
                    tariffId: {type: Number, default: -1},
                    tariffName: {type: String, default: ""},
                    tariffStatus: {type: Boolean, default: false},
                    packetPrice: {type: Number, default: -1},
                    paymentPackage: {type: Boolean, default: true},
                    deadline: {type: Number, default: -1},
                    services: [
                        {
                            serviceName: {type: String, default: ""},
                            serviceStatus: {type: Boolean, default: false},
                            serviceId: {type: Number, default: -1},
                            servicePrice: {type: Number, default: -1}
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = mongoose.model('tariffs_info', tariffsInfoSchema);


/*
nameDirection: 'Контекстная реклама',
            idDirection: 1,
            selected: false,
            paymentInFull: true,
            namesTariffs: [
                {
                    tariffId: 1,
                    tariffName: 'Тариф Микро',
                    tariffStatus: false,
                    packetPrice: 1000,
                    paymentPackage: false,
                    deadline: 3,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            serviceStatus: false,
                            serviceId: 1,
                            servicePrice: 100
                        }
                    ]
 */
