import { Request, Response } from "express";

import { ListWordsGenerateService } from "../../services/word/ListWordsGenerateService";

class ListWordsGenerateController {
  async handle(req: Request, res: Response) {
    const listWordsGenerateService = new ListWordsGenerateService();

    const words = await listWordsGenerateService.execute();
    return res.json(words);
  }
}

export { ListWordsGenerateController };
