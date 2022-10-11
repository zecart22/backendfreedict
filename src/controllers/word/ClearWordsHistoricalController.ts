import { Request, Response } from "express";
import { ClearWordsHistoricalService } from "../../services/word/ClearWordsHistoricalService";

class ClearWordsHistoricalController {
  async handle(req: Request, res: Response) {
    const clearWordsHistoricalService = new ClearWordsHistoricalService();

    const historical = await clearWordsHistoricalService.execute();

    return res.json(historical);
  }
}

export { ClearWordsHistoricalController };
