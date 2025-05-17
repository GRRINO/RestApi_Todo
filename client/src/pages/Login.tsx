import * as z from "zod"
import { loginSchema } from "../schema/login"
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

type FormInput  = z.infer<typeof loginSchema>

const Login = () => {

  const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm<FormInput>({
    resolver: zodResolver(loginSchema)
  });
  const submit:SubmitHandler<FormInput> = (data)=>{
    console.log(data.email)
  }
  return (
    <div className=" max-w-lg mx-auto mt-20">
      <h2 className=" text-2xl mb-2 font-medium">Login</h2>
      <form className=" flex-col flex space-y-2" action="" onSubmit={handleSubmit(submit)}>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="name">
            Email
          </label>
          <input className=" form " type="email" {...register("email")}  />
          {errors.email && <span className=" text-sm font-medium text-red-600">{errors.email.message}</span>}
        </div>
        <div>
          <label className=" block text-sm mb-1 text-gray-500" htmlFor="name">
            Password
          </label>
          <input className=" form " type="password" {...register("password")}  />
          {errors.password&& <span className=" text-sm font-medium text-red-600">{errors.password.message}</span>}

        </div>
        <button disabled={isSubmitting} className=" text-white  bg-black py-2 px-4 border" type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Login