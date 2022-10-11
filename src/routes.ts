import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAthenticated } from "./middlewares/isAthenticated";
import { ListWordsGenerateController } from "./controllers/word/ListWordsController";
import { SendWordToFavoriteController } from "./controllers/word/SendWordToFavoriteController";
import { RemoveWordFavoriteController } from "./controllers/word/RemoveWordFavoriteController";
import { SendWordToHistoricalController } from "./controllers/word/SendWordToHistoricalController";
import { ListAllWordsController } from "./controllers/word/ListAllWordsController";
import { ListAllFavoritesWordsController } from "./controllers/word/ListAllFavoritesWordsController";
import { ListAllHistoricalWordsController } from "./controllers/word/ListAllHistoricalWordsController";
import { WordDetailByIdController } from "./controllers/word/WordDetailByIdController";
import { ClearWordsHistoricalController } from "./controllers/word/ClearWordsHistoricalController";
import { ClearWordsFavoriteController } from "./controllers/word/ClearWordsFavoriteController";
const router = Router();

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/user/details", isAthenticated, new DetailUserController().handle);

/* ROTAS WORD */

router.post("/words", isAthenticated, new ListWordsGenerateController().handle);

router.post("/send/word/favorite", new SendWordToFavoriteController().handle);

router.delete(
  "/remove/word/favorite",
  isAthenticated,
  new RemoveWordFavoriteController().handle
);

router.post(
  "/send/word/historical",
  new SendWordToHistoricalController().handle
);

router.get(
  "/list/all/words",
  isAthenticated,
  new ListAllWordsController().handle
);

router.get(
  "/list/all/favorites/words",
  isAthenticated,
  new ListAllFavoritesWordsController().handle
);

router.get(
  "/list/all/historical/words",
  isAthenticated,
  new ListAllHistoricalWordsController().handle
);

router.get(
  "/word/details",
  isAthenticated,
  new WordDetailByIdController().handle
);

router.delete(
  "/clear/historical",
  isAthenticated,
  new ClearWordsHistoricalController().handle
);

router.delete(
  "/clear/favorite",
  isAthenticated,
  new ClearWordsFavoriteController().handle
);

export { router };
