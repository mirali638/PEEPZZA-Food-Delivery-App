import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import cors from "cors"
import userRouter from "./routes/user.route.js"

import itemRouter from "./routes/item.route.js"
import shopRouter from "./routes/shop.route.js"
import orderRouter from "./routes/order.route.js"
import http from "http"
import { Server } from "socket.io"
import { socketHandler } from "./socket.js"

const app=express()
const server=http.createServer(app)

const io=new Server(server,{
   cors:{
    origin:"https://vingo-food-delivery-app-2foo.onrender.com",
    credentials:true,
    methods:['POST','GET']
}
})

app.set("io",io)



const port=process.env.PORT || 5000
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://vingo-food-delivery-app-2foo.onrender.com"
  ],
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/shop",shopRouter)
app.use("/api/item",itemRouter)
app.use("/api/order",orderRouter)

socketHandler(io)
server.listen(port,()=>{
    connectDb()
    console.log(`server started at ${port}`)
})

