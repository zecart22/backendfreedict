import prismaClient from "../../prisma";

interface RemoveWordRequest {
  word_id: string;
}

class RemoveWordFavoriteService {
  async execute({ word_id }: RemoveWordRequest) {
    const word = prismaClient.word.update({
      where: {
        id: word_id,
      },
      data: {
        isFavorite: false,
      },
    });

    return word;
  }
}

export { RemoveWordFavoriteService };
