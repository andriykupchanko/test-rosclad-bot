"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.timeOut = exports.messageLimit = exports.commandMessage = void 0;
class User {
    constructor(id, userName, isBot, groop, userLaguage) {
        this.id = id;
        this.userName = userName;
        this.isBot = isBot;
        this.groop = groop;
        this.userLaguage = userLaguage;
    }
}
exports.User = User;
const messageLimit = 3; // Максимальна кількість повідомлень на секунду
exports.messageLimit = messageLimit;
const timeOut = 1000; // Тайм-аут в мілісекундах (1000 мс = 1 секунда)
exports.timeOut = timeOut;
const commandMessage = {
    startMsg: {
        startWelcomeMsgEn: '1',
        startWelcomeMsgUk: '2',
        startListCommandMsgEn: '2',
        startListCommandMsgUk: '2',
    },
    helpMsg: {
        helpMainMsgEn: '1',
        helpMainMsgUk: '2',
    },
};
exports.commandMessage = commandMessage;
