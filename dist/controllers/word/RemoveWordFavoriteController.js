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
exports.RemoveWordFavoriteController = void 0;
const RemoveWordFavoriteService_1 = require("../../services/word/RemoveWordFavoriteService");
class RemoveWordFavoriteController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const favoriteWord_id = req.query.favoriteWord_id;
            const removeWordFavoriteService = new RemoveWordFavoriteService_1.RemoveWordFavoriteService();
            const word = yield removeWordFavoriteService.execute({
                favoriteWord_id,
            });
            return res.json(word);
        });
    }
}
exports.RemoveWordFavoriteController = RemoveWordFavoriteController;
