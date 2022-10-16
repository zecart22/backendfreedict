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
exports.RemoveWordFavoriteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class RemoveWordFavoriteService {
    execute({ favoriteWord_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (favoriteWord_id === "") {
                throw new Error("This word is invalid");
            }
            const word = prisma_1.default.favorite.findUnique({
                where: {
                    id: favoriteWord_id,
                },
            });
            if (!word) {
                throw new Error("This word does not exist");
            }
            const favoriteWord = prisma_1.default.favorite.delete({
                where: {
                    id: favoriteWord_id,
                },
            });
            return favoriteWord;
        });
    }
}
exports.RemoveWordFavoriteService = RemoveWordFavoriteService;
