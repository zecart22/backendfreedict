"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.words = void 0;
const fs_1 = __importDefault(require("fs"));
const word_list_1 = __importDefault(require("word-list"));
const wordArray = fs_1.default.readFileSync(word_list_1.default, "utf8").split("\n");
const words = wordArray;
exports.words = words;
