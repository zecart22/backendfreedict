import { Request, Response } from "express";
import { ListAllHistoricalWordsService } from "../../services/word/ListAllHistoricalWordsService";

class ListAllHistoricalWordsController {
  async handle(req: Request, res: Response) {
    const take = req.query.take as string;
    const skip = req.query.take as string;
    const user_id = req.query.user_id as string;

    const listAllHistoricalWordsService = new ListAllHistoricalWordsService();
    const word = await listAllHistoricalWordsService.execute({
      skip,
      take,
      user_id,
    });

    return res.json(word);
  }
}

export { ListAllHistoricalWordsController };
