import prismaClient from "../../prisma";

interface WordsRequest {
  take: string;
  skip: string;
}

class ListAllWordsService {
  async execute({ take, skip }: WordsRequest) {
    const words = await prismaClient.word.findMany({
      take: Number(take),
      skip: Number(skip),
    });

    return words;
  }
}

export { ListAllWordsService };
