import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAthenticated } from "./middlewares/isAthenticated";
import { ListWordsGenerateController } from "./controllers/word/ListWordsController";
import { SendWordToFavoriteController } from "./controllers/word/SendWordToFavoriteController";
import { RemoveWordFavoriteController } from "./controllers/word/RemoveWordFavoriteController";
import { SendWordToHistoricalController } from "./controllers/word/SendWordToHistoricalController";
const router = Router();

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/user/details", isAthenticated, new DetailUserController().handle);

/* ROTAS WORD */

router.post("/words", isAthenticated, new ListWordsGenerateController().handle);

router.post(
  "/send/word/favorite",
  isAthenticated,
  new SendWordToFavoriteController().handle
);

router.delete(
  "/remove/word/favorite",
  isAthenticated,
  new RemoveWordFavoriteController().handle
);

router.put(
  "/send/word/historical",
  isAthenticated,
  new SendWordToHistoricalController().handle
);

export { router };
