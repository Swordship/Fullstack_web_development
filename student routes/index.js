import {Router,request,response} from "express";
import Student from "../../model/student.js";
const router = Router();
router.post("/a",async (req, res) =>{
    try{
       
        const student = Student(req.body);
        await student.save();
        res.send("student created successfully");
    } catch(error){
        res.send(error);  
    }
});

router.get("/h",async (req, res) =>{
    try{
        const student = await Student.find();
        res.send(student);
    } catch(error){
        res.send(error)  
    
    }
});
export default router;