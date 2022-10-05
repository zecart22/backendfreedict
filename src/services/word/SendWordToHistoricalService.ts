import prismaClient from "../../prisma";

interface SendWordRequest {
  word_id: string;
  user_id: string;
}

class SendWordToHistoricalService {
  async execute({ word_id, user_id }: SendWordRequest) {
    if (word_id === "") {
      throw new Error("This word is invalid");
    }

    const word = prismaClient.word.findUnique({
      where: {
        id: word_id,
      },
    });

    if (!word) {
      throw new Error("This word does not exist");
    }

    const wordToHistorical = prismaClient.historical.create({
      data: {
        user_id: user_id,
        word_id: word_id,
      },
    });

    return wordToHistorical;
  }
}

export { SendWordToHistoricalService };
