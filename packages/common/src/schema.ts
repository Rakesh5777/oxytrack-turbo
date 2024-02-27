import { z } from 'zod'

export * from 'zod';

export const signInSchema = z.object({
    username: z.string(),
    password: z.string()
}).strict();

export const contactPersonSchema = z.object({
    contactName: z.string(),
    mobileNumber: z.string(),
    active: z.boolean().optional()
}).strict();

export const createAmbulanceSchema = z.object({
    ambulanceName: z.string(),
    ambulanceNumber: z.string(),
    emailAddress: z.string().email().optional(),
    description: z.string(),
    contactPersons: z.array(contactPersonSchema),
    active: z.boolean().optional()
}).strict();