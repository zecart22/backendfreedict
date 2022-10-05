import { Request, Response } from "express";
import { SendWordToFavoriteService } from "../../services/word/SendWordToFavoriteService";

class SendWordToFavoriteController {
  async handle(req: Request, res: Response) {
    const word_id = req.query.word_id as string;
    const user_id = req.query.user_id as string;

    const sendWordToFavoriteService = new SendWordToFavoriteService();

    const word = await sendWordToFavoriteService.execute({
      word_id,
      user_id,
    });

    return res.json(word);
  }
}

export { SendWordToFavoriteController };
