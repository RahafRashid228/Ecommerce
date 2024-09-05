import multer from 'multer';
import { nanoid } from 'nanoid';

function fileUpload(){
    const storage = multer.diskStorage({});


    function fileFilter(req,file,cb){
             if(['image/gif','image/jpeg','image/png'].includes(file.mimetype)){
                cb(null,true)
             }
             else{
                cb("invalid format",false)
             }
    }
    const upload=multer({fileFilter,storage})
    return upload;
}
export default fileUpload;