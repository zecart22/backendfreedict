import { Request, Response } from "express";
import { RemoveWordFavoriteService } from "../../services/word/RemoveWordFavoriteService";

class RemoveWordFavoriteController {
  async handle(req: Request, res: Response) {
    const favoriteWord_id = req.query.favoriteWord_id as string;

    const removeWordFavoriteService = new RemoveWordFavoriteService();

    const word = await removeWordFavoriteService.execute({
      favoriteWord_id,
    });

    return res.json(word);
  }
}

export { RemoveWordFavoriteController };
