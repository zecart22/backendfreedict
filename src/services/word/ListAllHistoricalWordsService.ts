import prismaClient from "../../prisma";

interface WordsRequest {
  take: string;
  skip: string;
  user_id: string;
}

class ListAllHistoricalWordsService {
  async execute({ take, skip, user_id }: WordsRequest) {
    const favoriteWords = await prismaClient.historical.findMany({
      where: {
        user_id: user_id,
      },
      take: Number(take),
      skip: Number(skip),
    });

    return favoriteWords;
  }
}

export { ListAllHistoricalWordsService };
