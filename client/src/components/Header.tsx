import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex my-10 items-center justify-between">
        <h2 className="text-3xl font-bold">Simple Share</h2>
        <div className=" space-x-4">
            <Link className=" text-white  bg-black py-2 px-4 border" to='/login'>Login</Link>
            <Link className=" border py-2 px-4" to='/register'>Register</Link>
        </div>
    </div>
  )
}

export default Header