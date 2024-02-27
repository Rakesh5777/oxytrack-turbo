import { PrismaClient } from '@oxytrack/database';

const prisma = new PrismaClient()

export const getMasterUser = async (username: string, password: string) => {
    const user = await prisma.masterUsers.findFirst(
        {
            where: { username, password }, select: { id: true, username: true }
        });
    return user;
}