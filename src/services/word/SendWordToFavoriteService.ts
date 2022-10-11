import prismaClient from "../../prisma";

interface SendWordRequest {
  word_id: string;
  user_id: string;
}

class SendWordToFavoriteService {
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

    const isWordAlredyExistsInFavorite = prismaClient.favorite.findFirst({
      where: {
        id: word_id,
      },
    });

    /*  if (isWordAlredyExistsInFavorite) {
      throw new Error("This word alredy exists in favorites words section");
    } */

    const favorite = prismaClient.favorite.create({
      data: {
        user_id: user_id,
        word_id: word_id,
      },
    });

    return favorite;
  }
}

export { SendWordToFavoriteService };
