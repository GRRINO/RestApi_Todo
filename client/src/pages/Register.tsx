import {  SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod"
import { registerSchema } from '../schema/register';
import { zodResolver } from "@hookform/resolvers/zod";

type FormInput = z.infer< typeof registerSchema>

const Register = () => {

  const {register,handleSubmit, formState:{errors,isSubmitting}} =useForm<FormInput>({
    resolver : zodResolver(registerSchema)
  })
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
          <input className=" form " type="text" {...(register("name"))}/>
          {errors.name && <span className=" font-medium text-sm text-red-600">{errors.name.message}</span>}
        </div>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="email">
            Email
          </label>
          <input className=" form " type="email" {...(register("email"))} />
          {errors.email && <span className=" font-medium text-sm text-red-600">{errors.email.message}</span>}

        </div>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="password">
            Password
          </label>
          <input className=" form " type="password" {...(register("password"))} />
          {errors.password && <span className=" font-medium text-sm text-red-600">{errors.password.message}</span>}

        </div>
        <button disabled={isSubmitting} className=" text-white  bg-black py-2 px-4 border" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
