import{Router} from 'express';
const router =Router();
import * as categorycontroller from './category.controller.js';
import{asyncHandler} from '../../Utils/catchError.js';
import validation from '../../Middleware/validation.js'
import { createCategorySchema, deleteCategorySchema, getCategoryByIdSchema, updateCategoryImageSchema, updateCategorySchema } from "./category.validation.js";
import { auth } from "../../Middleware/auth.js";
import fileUpload from "../../Utils/multer.js";






const upload = fileUpload().single('image');
router.post('/',auth,upload,validation(createCategorySchema),asyncHandler(categorycontroller.createCategory));
router.get('/',asyncHandler(categorycontroller.getCatergories));
router.get('/:id',validation(getCategoryByIdSchema),asyncHandler(categorycontroller.getCategoryById));
router.put('/:id',auth,validation(updateCategorySchema),asyncHandler(categorycontroller.updateCategoryDetails ));
router.put('/image/:id',auth,upload,validation(updateCategoryImageSchema),asyncHandler(categorycontroller.updateCategoryImage ));
router.delete('/:id',auth,validation(deleteCategorySchema),asyncHandler(categorycontroller.deleteCategory));






 router.post('/createCategory',asyncHandler(categorycontroller.createCategory));


export default router;