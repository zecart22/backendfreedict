import prismaClient from "../../prisma";

interface WordRequest {
  word_id: string;
}

class WordDetailByIdService {
  async execute({ word_id }: WordRequest) {
    const user = await prismaClient.word.findUnique({
      where: {
        id: word_id,
      },
    });

    return user;
  }
}

export { WordDetailByIdService };
