import { Router } from 'express';
const router = Router();
import * as categorycontroller from './category.controller.js'; // Keep this as is
import { asyncHandler } from '../../Utils/catchError.js';
import validation from '../../Middleware/validation.js';
import { createCategorySchema, deleteCategorySchema, getCategoryByIdSchema, updateCategoryImageSchema, updateCategorySchema } from "./category.validation.js";
import { auth, roles } from "../../Middleware/auth.js";
import fileUpload from "../../Utils/multer.js";
import { endPoints } from "./category.role.js";

const upload = fileUpload().single('image');

router.post('/', auth(endPoints.create), upload, validation(createCategorySchema), asyncHandler(categorycontroller.createCategory));

router.get('/', asyncHandler(categorycontroller.getCategories)); 

router.get('/:id', validation(getCategoryByIdSchema), asyncHandler(categorycontroller.getCategoryById));

router.put('/:id', auth(endPoints.update), validation(updateCategorySchema), asyncHandler(categorycontroller.updateCategoryDetails));

router.put('/image/:id', auth(endPoints.update), upload, validation(updateCategoryImageSchema), asyncHandler(categorycontroller.updateCategoryImage));

router.delete('/:id', auth(endPoints.update), validation(deleteCategorySchema), asyncHandler(categorycontroller.deleteCategory));



export default router;