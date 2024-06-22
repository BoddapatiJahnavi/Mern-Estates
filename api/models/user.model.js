import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    avatar:{
        type:String,
        default:"https://ociacc.com/wp-content/uploads/2019/03/blank-profile-picture-973460_1280-1030x1030.png"
    },
},
{timestamps :true});

const User = mongoose.model('User',userSchema);
export default User;