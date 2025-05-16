import {  SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod"
type FormInput ={
  name:string,
  email:string,
  password:string,
}

const Register = () => {

  const {register,handleSubmit} =useForm<FormInput>()
  const submit: SubmitHandler<FormInput> = (data)=>{
    console.log(data.name)
  }
  return (
    <div className=" max-w-lg mx-auto mt-20">
      <h2 className=" text-2xl mb-2 font-medium">Register</h2>
      <form className=" flex-col flex space-y-2" onSubmit={handleSubmit(submit)}>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="name">
            Name
          </label>
          <input className=" form " type="text" {...(register("name"),{required:true})}/>
        </div>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="email">
            Email
          </label>
          <input className=" form " type="email" {...(register("email"),{required:true})} />
        </div>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="password">
            Password
          </label>
          <input className=" form " type="password" {...(register("password"),{required:true})} />
        </div>
        <button className=" text-white  bg-black py-2 px-4 border" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
