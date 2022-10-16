import prismaClient from "../../prisma";
import { words } from "../../controllers/word/wordsList";

class ListWordsGenerateService {
  async execute() {
    const arrayDataWords = [];
    let word = "";

    let index = 0;

    while (index < words.length) {
      index++;
      word = words[index];
      const wordsData = await prismaClient.word.create({
        data: {
          word: word,
        },
      });
    }
  }
}

export { ListWordsGenerateService };
