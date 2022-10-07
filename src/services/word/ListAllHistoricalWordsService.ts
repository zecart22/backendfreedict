import prismaClient from "../../prisma";

interface WordsRequest {
  user_id: string;
}

class ListAllHistoricalWordsService {
  async execute({ user_id }: WordsRequest) {
    let word = "";

    let index = -1;

    const historicalWords = await prismaClient.historical.findMany({
      where: {
        user_id: user_id,
      },
    });

    const arrayWordsId = historicalWords.map((word) => word.word_id);

    const historicalNameWords = [];

    while (index < arrayWordsId.length) {
      index++;
      word = arrayWordsId[index];
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
        historicalNameWords.push(wordsData);
      }
    }

    return historicalNameWords;
  }
}

export { ListAllHistoricalWordsService };
