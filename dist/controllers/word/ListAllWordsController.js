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
exports.ListAllWordsController = void 0;
const ListAllWordsService_1 = require("../../services/word/ListAllWordsService");
class ListAllWordsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const take = req.query.take;
            const skip = req.query.take;
            const listAllWordsService = new ListAllWordsService_1.ListAllWordsService();
            const word = yield listAllWordsService.execute({
                skip,
                take,
            });
            return res.json(word);
        });
    }
}
exports.ListAllWordsController = ListAllWordsController;
