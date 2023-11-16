"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.buttonGroup = exports.timeOut = exports.messageLimit = exports.commandMessage = void 0;
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
;
const messageLimit = 3; // Максимальна кількість повідомлень на секунду
exports.messageLimit = messageLimit;
const timeOut = 1000; // Тайм-аут в мілісекундах (1000 мс = 1 секунда)
exports.timeOut = timeOut;
const commandMessage = {
    startMsg: {
        startWelcomeMsgEn: 'Welcome to the schedule of Chernivtsi National University!',
        startWelcomeMsgUk: 'Ласкаво просимо до розкладу ЧНУ!',
        startListCommandMsgEn: `/help - help and instructions for working with the bot,\n` +
            `/today - the schedule for today,\n` + `/tomorrow - schedule for tomorrow,\n` +
            `and all other functionality described in the help menu...`,
        startListCommandMsgUk: `/help - допомога та інструкції по роботі з ботом,\n` +
            `/thelp - допомога та інструкції по роботі з ботом,\n` +
            `/today - розклад на сьогодні\n` + `/tomorrow - розклад на завтра,\n` +
            `і весь інший функціонал, описаний в меню help...`,
    },
    helpMsg: {
        helpMainMsgEn: `All functions of the bot:\n\n` + `/today - the schedule for today,\n` + `/tomorrow - schedule for tomorrow,\n` +
            `/week - the schedule for this week,\n` + `/schedule the schedule a specific date\n` +
            `/exam -schedule for the session\n` + `/group - select a group or change the selected group\n` +
            `/stop - finish working with the bot`,
        helpMainMsgUk: `Всі функції бота:\n\n` + `/today - розклад на сьогодні,\n` + `/tomorrow - розклад на завтра,\n` +
            `/week - розклад на цей тиждень,\n` + `/schedule - розклад на певну дату\n` +
            `/exam - розклад на сесію\n` + `/group - вибрати групу або змінити вибрану групу\n` +
            `/stop - завершити роботу з ботом\n`,
    },
};
exports.commandMessage = commandMessage;
const buttonGroup = {
    buttons: [{ group: '231', callbackFunction: 'output' }],
};
exports.buttonGroup = buttonGroup;
