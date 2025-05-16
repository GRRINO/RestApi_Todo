import express, { json } from"express";
import dotenv from "dotenv"
import { connectDb } from "./db";
import userRoute from "./routes/user"
import todoRoute from "./routes/todo"
import cors from "cors"
import errorHandler from "./middlewares/errorHandler";
import cookieParser from"cookie-parser"

dotenv.config({
    path:".env"
})

const app = express()

app.use(cors({
    origin : process.env.CLIENT_URL
}))
app.use(json())
app.use(cookieParser())

app.use(userRoute)
app.use(todoRoute)

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    connectDb()
    console.log("Server is running on : ",PORT)
})
