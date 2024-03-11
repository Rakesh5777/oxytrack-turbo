import { prisma } from "./../index";

export const getMasterUserByUsernamePassword = async (username: string, password: string) => {
  return await prisma.masterUsers.findFirst({
    where: { username, password },
    select: { id: true, username: true },
  });
};

export const getMasterUserById = async (id: string) => {
  return await prisma.masterUsers.findFirst({
    where: { id },
  });
};
