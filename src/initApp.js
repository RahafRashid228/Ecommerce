import connectDb from "../DB/connection.js";
import authRouter from './Modules/auth/auth.router.js'
import categoryRouter from './Modules/categorys/category.router.js';
import SubcategoryRouter from "./modules/subcategory/subCategory.router.js"
const initApp=(app,express)=>{
    connectDb();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/category',categoryRouter);
    app.use('/Subcategory',SubcategoryRouter);

    app.use('*',(req,res,next)=>{
        //return res.status(404).json({message:"page not found"});
        return next(new Error(`page not found`));
    });

    app.use( (err,req,res,next)=>{
          return res.status(err.statusCode).json({message:err.message});
    });
}
export default initApp;