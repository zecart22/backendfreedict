import { Request, Response } from "express";
import { RemoveWordFavoriteService } from "../../services/word/RemoveWordFavoriteService";

class RemoveWordFavoriteController {
  async handle(req: Request, res: Response) {
    const word_id = req.query.word_id as string;

    const removeWordFavoriteService = new RemoveWordFavoriteService();

    const word = await removeWordFavoriteService.execute({
      word_id,
    });

    return res.json(word);
  }
}

export { RemoveWordFavoriteController };
