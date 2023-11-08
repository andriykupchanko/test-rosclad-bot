"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.commandMessage = void 0;
class User {
    constructor(id, userName, isBot, groop) {
        this.id = id;
        this.userName = userName;
        this.isBot = isBot;
        this.groop = groop;
    }
}
exports.User = User;
const commandMessage = {
    name: "My",
    value: 123,
};
exports.commandMessage = commandMessage;
