import prismaClient from "../../prisma";
import { words } from "../../controllers/word/wordsList";

interface WordsProps {
  user_id: string;
}

class ListWordsGenerateService {
  async execute({ user_id }: WordsProps) {
    const arrayDataWords = [];
    let word = "";

    let index = 0;

    while (index < words.length) {
      index++;
      word = words[index];
      const wordsData = await prismaClient.word.create({
        data: {
          word: word,
          user_id: user_id,
        },
      });
    }
  }
}

export { ListWordsGenerateService };
