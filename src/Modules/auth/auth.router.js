import{Router} from 'express';
const router =Router();
import * as authcontroller from './auth.controller.js';
import{asyncHandler} from '../../Utils/catchError.js'
import validation from '../../Middleware/validation.js'
import { registerSchema,loginSchema } from './auth.validation.js';






router.post('/register',validation(registerSchema),asyncHandler(authcontroller.register));
router.post('/login',validation(loginSchema),asyncHandler(authcontroller.login))


// router.post('/createCategory',asyncHandler(Authconteroller.createCategory));


export default router;