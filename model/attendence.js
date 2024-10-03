import mongoose from 'mongoose';

const attendenceSchema = new mongoose.Schema({
  
  rollNumber: {
    type: Number,
    required: true
    
  },
  date: {
    type: String,
    required: true
  },
  status:{
    type: String,
    enum:["present","active"],
    required: true

  },
  class: {
    type: String,
    required: true
  },
  section: {
    type: String,
    require:true
  },
  email:{
    type:String,
    require:true
  }
 
});

const Attendence = mongoose.model('Attendence', attendenceSchema);
export default Attendence;