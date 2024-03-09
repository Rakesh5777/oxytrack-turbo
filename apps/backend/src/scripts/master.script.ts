import { prisma } from "./../index";

export const getMasterUserByUsernamePassword = async (username: string, password: string) => {
  return await prisma.masterUsers.findFirst({
    where: { username, password },
    select: { id: true, username: true },
  });
};
