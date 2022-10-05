import prismaClient from "../../prisma";

interface SendWordRequest {
  word_id: string;
}

class SendWordToHistoricalService {
  async execute({ word_id }: SendWordRequest) {
    const word = prismaClient.word.update({
      where: {
        id: word_id,
      },
      data: {
        isInHistoric: true,
      },
    });

    return word;
  }
}

export { SendWordToHistoricalService };
