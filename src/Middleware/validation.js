
import joi from 'joi';
const dataMethods = ['body', 'params', 'query'];

export const generalFields={
    email:joi.string().email().min(6).max(50).required().messages({
        'string.email':'email is requires in this form : youremail@gmail.com',
        'string.empty':'email is required'
        }),password:joi.string().min(8).required().messages({
            'string.empty':'password is required',
            'string.min':'password must be at least 6 digits'
           }),
}


const validation =(schema)=>{
    return(req,res,next)=>{
        const validationArray=[]
        dataMethods.forEach(key=>{
           if(schema[key]){
            const validationResult=schema[key].validate(req[key],{abortEarly:false});
            if(validationResult.error){
                validationArray.push(validationResult.error.details);
            }
           }
        });
        if(validationArray.length>0){
            return res.status(400).json({message:"validation error",Errors:validationArray})
        }
        else{
            next();
        }
    }
}

export default validation;








// const dataMethods = ['body', 'params', 'query'];

// const validation = (schema) => (req, res, next) => {
//   const validationArray = [];

//   dataMethods.forEach((key) => {
//     if (schema[key]) {
//       const { error } = schema[key].validate(req[key], { abortEarly: false });
//       if (error) {
//         validationArray.push(...error.details);
//       }
//     }
//   });

//   if (validationArray.length > 0) {
//     return res.status(400).json({ message: "validation error", Errors: validationArray });
//   } else {
//     next();
//   }
// };

// export default validation;