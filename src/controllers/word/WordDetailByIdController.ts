import { Request, Response } from "express";
import { WordDetailByIdService } from "../../services/word/WordDetailByIdService";

class WordDetailByIdController {
  async handle(req: Request, res: Response) {
    const word_id = req.query.word_id as string;

    const wordDetailByIdService = new WordDetailByIdService();

    const word = await wordDetailByIdService.execute({ word_id });

    return res.json(word);
  }
}

export { WordDetailByIdController };
