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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllFavoritesWordsController = void 0;
const ListAllFavoritesWordsService_1 = require("../../services/word/ListAllFavoritesWordsService");
class ListAllFavoritesWordsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.query.user_id;
            const listAllFavoritesWordsService = new ListAllFavoritesWordsService_1.ListAllFavoritesWordsService();
            const word = yield listAllFavoritesWordsService.execute({
                user_id,
            });
            return res.json(word);
        });
    }
}
exports.ListAllFavoritesWordsController = ListAllFavoritesWordsController;
