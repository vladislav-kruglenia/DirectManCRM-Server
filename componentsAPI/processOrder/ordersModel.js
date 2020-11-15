const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: String,
    nameProject: {type: String, default: ""},
    directionsAndTariffs: [
        {
            nameDirection: {type: String, default: ""},
            idDirection: {type: Number, default: -1},
            paymentInFull: {type: Boolean, default: true},
            directionTotalPrice: {type: Number, default: -1},
            namesTariffs: [
                {
                    tariffId: {type: Number, default: -1},
                    tariffName: {type: String, default: ""},
                    tariffStatus: {type: Boolean, default: false},
                    packetPrice: {type: Number, default: -1},
                    paymentPackage: {type: Boolean, default: true},
                    deadline: {type: Number, default: -1},
                    totalPrice: {type: Number, default: -1},
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

module.exports = mongoose.model('directions_And_Tariffs', orderSchema);


/*
let startState = {
    userId: "1",
    nameProject: "vk.com",
    directionsAndTariffs: [
        {
            nameDirection: 'Контекстная реклама',
            idDirection: 1,
            selected: false,
            paymentInFull: true,
            tariffsNames: [
                {
                    id: 1,
                    name: 'Тариф Микро',
                    selected: false,
                    packetPrice: 1000,
                    paymentAPackageServices: false,
                    periodOfExecution: 3,
                    services: [
                        {
                            serviceName: 'Яндекс Поиск',
                            selected: false,
                            idService: 1,
                            servicePrice: 100
                        }
                    ]
                }
            ]
        }
    ]
};
*/
/*
Пример
{
    userId: "1",
    nameProject: "Direct Man Web App",
    directionsAndTariffs: [
        {
            nameDirection: "Контекстная реклама",
            idDirection: "1",
            paymentInFull: true,
            directionTotalPrice: 100,
            namesTariffs: [
                {
                    tariffId: "1",
                    tariffName: "Тариф Микро",
                    tariffStatus: true,
                    packetPrice: 1000,
                    paymentPackage: false,
                    deadline: 5,
                    totalPrice: 100,
                    services: [
                        {
                            serviceName: "Яндекс Поиск",
                            serviceStatus: true,
                            serviceId: "1",
                            servicePrice: 100
                        }
                    ]
                }
            ]
        }
    ]
}
*/
