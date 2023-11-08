"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceUnderscore = void 0;
function replaceUnderscore(initialStr, replaceChar = ' ') {
    return initialStr.replace('_', replaceChar);
}
exports.replaceUnderscore = replaceUnderscore;
