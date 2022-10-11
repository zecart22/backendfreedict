import prismaClient from "../../prisma";

class ClearWordsFavoriteService {
  async execute() {
    const historical = prismaClient.favorite.deleteMany();

    return historical;
  }
}

export { ClearWordsFavoriteService };
