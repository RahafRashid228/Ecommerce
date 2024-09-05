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
        image:joi.string().optional(),
    phone:joi.string().optional(),
    address:joi.string().optional(),
    confirmEmail:joi.boolean().default(false),
    gender:joi.valid('Male','Female').messages({
        'any.only':'gender must be one of [Male, Female]'
    }),
    status:joi.valid('active','not_active').default('not_active').messages({
        'any.only':'gender must be one of [active, not_active]'
    }),
    role:joi.valid('user','admin').default('user').messages({
        'any.only':'gender must be one of [user, admin]'
    })
    })
}

export const loginSchema={
    body:joi.object({
        email: generalFields.email,
        password: generalFields.password,
    })
}