import { Request, Response } from "express";
import { ClearWordsFavoriteService } from "../../services/word/ClearWordsFavoriteService";

class ClearWordsFavoriteController {
  async handle(req: Request, res: Response) {
    const clearWordsFavoriteService = new ClearWordsFavoriteService();

    const favorite = await clearWordsFavoriteService.execute();

    return res.json(favorite);
  }
}

export { ClearWordsFavoriteController };
