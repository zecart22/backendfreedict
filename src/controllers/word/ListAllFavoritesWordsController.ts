import { Request, Response } from "express";
import { ListAllFavoritesWordsService } from "../../services/word/ListAllFavoritesWordsService";

class ListAllFavoritesWordsController {
  async handle(req: Request, res: Response) {
    const take = req.query.take as string;
    const skip = req.query.take as string;
    const user_id = req.query.user_id as string;

    const listAllFavoritesWordsService = new ListAllFavoritesWordsService();
    const word = await listAllFavoritesWordsService.execute({
      skip,
      take,
      user_id,
    });

    return res.json(word);
  }
}

export { ListAllFavoritesWordsController };
