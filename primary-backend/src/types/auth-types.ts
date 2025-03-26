import {z} from 'zod';

export const SignUpSchema = z.object({
    username:z.string().min(3),
    password:z.string().min(6),
    name:z.string().min(3)
})

export const SignInSchema=z.object({
    username:z.string().min(3),
    password:z.string().min(6)
})

export const ResetPasswordSchema=z.object({
    password:z.string().min(6),
    newPassword:z.string().min(6)
})



