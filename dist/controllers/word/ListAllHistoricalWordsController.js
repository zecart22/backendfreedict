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
exports.ListAllHistoricalWordsController = void 0;
const ListAllHistoricalWordsService_1 = require("../../services/word/ListAllHistoricalWordsService");
class ListAllHistoricalWordsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.query.user_id;
            const listAllHistoricalWordsService = new ListAllHistoricalWordsService_1.ListAllHistoricalWordsService();
            const word = yield listAllHistoricalWordsService.execute({
                user_id,
            });
            return res.json(word);
        });
    }
}
exports.ListAllHistoricalWordsController = ListAllHistoricalWordsController;
