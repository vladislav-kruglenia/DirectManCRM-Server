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
            tariffsNames: [
                {
                    id: {type: Number, default: -1},
                    name: {type: String, default: ""},
                    selected: {type: Boolean, default: false},
                    packetPrice: {type: Number, default: -1},
                    paymentAPackageServices: {type: Boolean, default: true},
                    periodOfExecution: {type: Number, default: -1},
                    services: [
                        {
                            serviceName: {type: String, default: ""},
                            selected: {type: Boolean, default: false},
                            idService: {type: Number, default: -1},
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
