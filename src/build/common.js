"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = exports.getDayWeek = exports.weeksSince = exports.replaceUnderscore = void 0;
function replaceUnderscore(initialStr, replaceChar = ' ') {
    return initialStr.replace('_', replaceChar);
}
exports.replaceUnderscore = replaceUnderscore;
function weeksSince(date) {
    const today = new Date();
    const InDays = (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    const weeks = Math.floor(InDays / 7);
    return weeks;
}
exports.weeksSince = weeksSince;
function getDayWeek(date) {
    const dayOfWeek = date.getDay();
    const dayNames = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
    return [dayNames[dayOfWeek], dayOfWeek];
}
exports.getDayWeek = getDayWeek;
function getDate(date) {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}
exports.getDate = getDate;
