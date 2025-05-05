import mongoose, { Schema } from "mongoose";
import bcrypt from"bcrypt";

interface IUser extends Document{
    name:string,
    email:string,
    password:string
    matchPassword(enteredPassword : string) : Promise<boolean>
}

const userSchema = new Schema<IUser>({
    name :{
        type : String,
        require : true,
    },
    email :{
        type : String,
        require : true,
        unique:true,
    },
    password :{
        type :String,
        require:true
    }
})

// userSchema.pre("save", async function (next) {
//     const user = this as any; // Explicitly type 'this' as any or a more specific type
//     if (!user.isModified("password")) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
// });

userSchema.pre("save", async function(next){
    const user = this as any
    if(!user.isModified("password")){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt);

})

userSchema.methods.matchPassword = async function(enteredPassword:string){
    return await bcrypt.compare(enteredPassword ,this.password)
}

export default mongoose.model<IUser>("User", userSchema);

