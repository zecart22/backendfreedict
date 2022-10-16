"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWordsGenerateService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const wordsList_1 = require("../../controllers/word/wordsList");
class ListWordsGenerateService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayDataWords = [];
            let word = "";
            let index = 0;
            while (index < wordsList_1.words.length) {
                index++;
                word = wordsList_1.words[index];
                const wordsData = yield prisma_1.default.word.create({
                    data: {
                        word: word,
                    },
                });
            }
        });
    }
}
exports.ListWordsGenerateService = ListWordsGenerateService;
