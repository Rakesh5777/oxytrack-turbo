import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SignInModel } from '@oxytrack/common';
import { PrismaClient } from '@oxytrack/database';

const prisma = new PrismaClient()

export const getMasterUser = async (username: string, password: string) => {
    const user = await prisma.masterUsers.findFirst(
        {
            where: { username, password }, select: { id: true, username: true }
        });
    return user;
}