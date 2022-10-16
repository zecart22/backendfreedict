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
exports.ListAllFavoritesWordsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListAllFavoritesWordsService {
    execute({ user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            let word = "";
            let favoriteWordId = "";
            let index = -1;
            const favoriteWords = yield prisma_1.default.favorite.findMany({
                where: {
                    user_id: user_id,
                },
            });
            const arrayWordsId = favoriteWords.map((word) => word.word_id);
            const arrayWordsLinkedUserId = favoriteWords.map((word) => word.id);
            const favoriteNameWords = [];
            while (index < arrayWordsId.length) {
                index++;
                word = arrayWordsId[index];
                favoriteWordId = arrayWordsLinkedUserId[index];
                if (word === undefined) {
                }
                else {
                    const wordsData = yield prisma_1.default.word.findUnique({
                        where: {
                            id: word,
                        },
                        select: {
                            id: true,
                            word: true,
                        },
                    });
                    favoriteNameWords.push({ wordsData, favoriteWordId });
                }
            }
            return favoriteNameWords;
        });
    }
}
exports.ListAllFavoritesWordsService = ListAllFavoritesWordsService;
