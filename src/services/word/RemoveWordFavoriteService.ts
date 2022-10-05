import prismaClient from "../../prisma";

interface RemoveWordRequest {
  favoriteWord_id: string;
}

class RemoveWordFavoriteService {
  async execute({ favoriteWord_id }: RemoveWordRequest) {
    if (favoriteWord_id === "") {
      throw new Error("This word is invalid");
    }

    const word = prismaClient.favorite.findUnique({
      where: {
        id: favoriteWord_id,
      },
    });

    if (!word) {
      throw new Error("This word does not exist");
    }

    const favoriteWord = prismaClient.favorite.delete({
      where: {
        id: favoriteWord_id,
      },
    });

    return favoriteWord;
  }
}

export { RemoveWordFavoriteService };
