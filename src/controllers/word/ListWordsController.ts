import { Request, Response } from "express";

import { ListWordsGenerateService } from "../../services/word/ListWordsGenerateService";

class ListWordsGenerateController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const listWordsGenerateService = new ListWordsGenerateService();

    const words = await listWordsGenerateService.execute({
      user_id,
    });
    return res.json(words);
  }
}

export { ListWordsGenerateController };
