import { Request, Response } from "express";
import { SendWordToHistoricalService } from "../../services/word/SendWordToHistoricalService";

class SendWordToHistoricalController {
  async handle(req: Request, res: Response) {
    const word_id = req.query.word_id as string;
    const user_id = req.query.user_id as string;

    const sendWordToHistoricalService = new SendWordToHistoricalService();

    const word = await sendWordToHistoricalService.execute({
      word_id,
      user_id,
    });

    return res.json(word);
  }
}

export { SendWordToHistoricalController };
