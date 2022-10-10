import prismaClient from "../../prisma";

class ClearWordsHistoricalService {
  async execute() {
    const historical = prismaClient.historical.deleteMany();

    return historical;
  }
}

export { ClearWordsHistoricalService };
