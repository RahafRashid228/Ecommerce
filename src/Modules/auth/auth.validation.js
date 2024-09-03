import joi from 'joi';
import { generalFields } from '../../Middleware/validation.js';

export const registerSchema={
    body:joi.object({
        userName: joi.string().min(3).max(40).required().messages({
           'string.empty':'userName is required',
            'string.max':'maximmum 40 letters for userName',
        }),
        email: generalFields.email,
        password: generalFields.password,
        cpassword:joi.valid(joi.ref('password')).required(),
    })
}

export const loginSchema={
    body:joi.object({
        email: generalFields.email,
        password: generalFields.password,
    })
}