import{Router} from 'express';
const router =Router();
import * as authcontroller from './auth.controller.js';
import{asyncHandler} from '../../Utils/catchError.js'


router.post('/register',asyncHandler(authcontroller.register));
router.post('/login',asyncHandler(authcontroller.login))


// router.post('/createCategory',asyncHandler(Authconteroller.createCategory));


export default router;