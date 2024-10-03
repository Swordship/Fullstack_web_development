import {Router,request,response} from "express";
import Student from "../../model/Student.js";
import Teacher from "../../model/Teacher.js";
import Attendence from "../model/attendence.js";
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
router.post('/tes/',async (req, res) =>{
    try{
       
        const teacher = Teacher(req.body);
        await teacher.save();
        res.send("Teacher created successfully");
    } catch(error){
        res.send(error);  
}
})

router.get('/get/:id',async (req, res) =>{
    try{
        const teacher = await Teacher.findById(req.params.id);
        res.send(teacher);
    } catch(error){
        res.send(error);
}});
router.put('/up/:id',async (req, res) =>{
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runvalidate:true}

        );
        res.send("teacher updated successfully");if(!teacher)res.status(404).send("teacher not found")
    } catch (error) {
        res.send(error);
    }
});
router.delete('/del/:id',async (req, res) =>{
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id

        );
        res.send("teacher deleted successfully");if(!teacher)res.status(404).send("teacher not found")
    } catch (error) {
        res.send(error);
    }
});
router.post("/m",async (req, res) =>{
    try{
       
        const attendence = Attendence(req.body);
        await attendence.save();
        res.send("attendence created successfully");
    } catch(error){
        res.send(error);  
    }
});
router.get("/hello",async (req, res) =>{
    try{
        const attendence = await Attendence.find();
        res.send(attendence);
    } catch(error){
        res.send(error)  
    
    }
});
router.put("/puts/:id", async (req , res) => {
    try {
      const attendence = await Attendence.findByIdAndUpdate(
        req.params.id, req.body, 
        { new: true, runValidators: true });
      if (!attendence)
        {return res.send( 'attendence not found' )};
      res.send('update successfully')
       
    } catch (error) {
        res.send(error);
    }
  });
  router.delete('/custs/:id', async (req, res) => {
    try {
      const attendence = await Attendence.findByIdAndDelete(req.params.id);
      if (!attendence){ return res.send( 'attendece not found')};
      res.send(attendence)
      
    } catch (error) {
         res.send(error)
    }
  });
export default router;