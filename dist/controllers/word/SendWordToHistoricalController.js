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
exports.SendWordToHistoricalController = void 0;
const SendWordToHistoricalService_1 = require("../../services/word/SendWordToHistoricalService");
class SendWordToHistoricalController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const word_id = req.query.word_id;
            const user_id = req.query.user_id;
            const sendWordToHistoricalService = new SendWordToHistoricalService_1.SendWordToHistoricalService();
            const word = yield sendWordToHistoricalService.execute({
                word_id,
                user_id,
            });
            return res.json(word);
        });
    }
}
exports.SendWordToHistoricalController = SendWordToHistoricalController;
