import prismaClient from "../../prisma";

interface SendWordRequest {
  word_id: string;
}

class SendWordToFavoriteService {
  async execute({ word_id }: SendWordRequest) {
    const word = prismaClient.word.update({
      where: {
        id: word_id,
      },
      data: {
        isFavorite: true,
      },
    });

    return word;
  }
}

export { SendWordToFavoriteService };
