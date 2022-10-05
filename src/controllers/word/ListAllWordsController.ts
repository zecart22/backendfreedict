import { Request, Response } from "express";
import { ListAllWordsService } from "../../services/word/ListAllWordsService";

class ListAllWordsController {
  async handle(req: Request, res: Response) {
    const take = req.query.take as string;
    const skip = req.query.take as string;

    const listAllWordsService = new ListAllWordsService();
    const word = await listAllWordsService.execute({
      skip,
      take,
    });
    return res.json(word);
  }
}

export { ListAllWordsController };
