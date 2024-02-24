import { z } from 'zod'

export const validate = (schema: z.Schema) => (req: any, res: any, next: () => void) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error: any) {
        res.status(400).json({ error: error.errors });
    }
};

export const signInSchema = z.object({
    username: z.string().email(),
    password: z.string()
}).strict();

export type SignInModel = z.infer<typeof signInSchema>;