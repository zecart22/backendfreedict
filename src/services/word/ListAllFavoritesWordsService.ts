import prismaClient from "../../prisma";

interface WordsRequest {
  user_id: string;
}

class ListAllFavoritesWordsService {
  async execute({ user_id }: WordsRequest) {
    let word = "";
    let favoriteWordId = "";
    let index = -1;

    const favoriteWords = await prismaClient.favorite.findMany({
      where: {
        user_id: user_id,
      },
    });

    const arrayWordsId = favoriteWords.map((word) => word.word_id);
    const arrayWordsLinkedUserId = favoriteWords.map((word) => word.id);

    const favoriteNameWords = [];

    while (index < arrayWordsId.length) {
      index++;
      word = arrayWordsId[index];
      favoriteWordId = arrayWordsLinkedUserId[index];
      if (word === undefined) {
      } else {
        const wordsData = await prismaClient.word.findUnique({
          where: {
            id: word,
          },
          select: {
            id: true,
            word: true,
          },
        });

        favoriteNameWords.push({ wordsData, favoriteWordId });
      }
    }

    return favoriteNameWords;
  }
}

export { ListAllFavoritesWordsService };
