import express, { json } from"express";
import dotenv from "dotenv"
import { connectDb } from "./db";
import userRoute from "./routes/user"
import todoRoute from "./routes/todo"
import cors from "cors"

dotenv.config({
    path:".env"
})

const app = express()

app.use(cors({
    origin : process.env.CLIENT_URL
}))
app.use(json())

app.use(userRoute)
app.use(todoRoute)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    connectDb()
    console.log("Server is running on : ",PORT)
})
