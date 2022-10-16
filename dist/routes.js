"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAthenticated_1 = require("./middlewares/isAthenticated");
const ListWordsGenerateController_1 = require("./controllers/word/ListWordsGenerateController");
const SendWordToFavoriteController_1 = require("./controllers/word/SendWordToFavoriteController");
const RemoveWordFavoriteController_1 = require("./controllers/word/RemoveWordFavoriteController");
const SendWordToHistoricalController_1 = require("./controllers/word/SendWordToHistoricalController");
const ListAllWordsController_1 = require("./controllers/word/ListAllWordsController");
const ListAllFavoritesWordsController_1 = require("./controllers/word/ListAllFavoritesWordsController");
const ListAllHistoricalWordsController_1 = require("./controllers/word/ListAllHistoricalWordsController");
const ClearWordsHistoricalController_1 = require("./controllers/word/ClearWordsHistoricalController");
const ClearWordsFavoriteController_1 = require("./controllers/word/ClearWordsFavoriteController");
const router = (0, express_1.Router)();
exports.router = router;
//-- ROTAS USER --
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/login", new AuthUserController_1.AuthUserController().handle);
router.get("/user/details", isAthenticated_1.isAthenticated, new DetailUserController_1.DetailUserController().handle);
/* ROTAS WORD */
router.post("/words/generate", isAthenticated_1.isAthenticated, new ListWordsGenerateController_1.ListWordsGenerateController().handle);
router.post("/send/word/favorite", new SendWordToFavoriteController_1.SendWordToFavoriteController().handle);
router.delete("/remove/word/favorite", isAthenticated_1.isAthenticated, new RemoveWordFavoriteController_1.RemoveWordFavoriteController().handle);
router.post("/send/word/historical", new SendWordToHistoricalController_1.SendWordToHistoricalController().handle);
router.get("/list/all/words", isAthenticated_1.isAthenticated, new ListAllWordsController_1.ListAllWordsController().handle);
router.get("/list/all/favorites/words", isAthenticated_1.isAthenticated, new ListAllFavoritesWordsController_1.ListAllFavoritesWordsController().handle);
router.get("/list/all/historical/words", isAthenticated_1.isAthenticated, new ListAllHistoricalWordsController_1.ListAllHistoricalWordsController().handle);
router.delete("/clear/historical", isAthenticated_1.isAthenticated, new ClearWordsHistoricalController_1.ClearWordsHistoricalController().handle);
router.delete("/clear/favorite", isAthenticated_1.isAthenticated, new ClearWordsFavoriteController_1.ClearWordsFavoriteController().handle);
