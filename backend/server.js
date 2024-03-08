import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'

import connectToMongoDB from './db/connectToMongoDB.js'

import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import { app, server } from './socket/socket.js'


const PORT = process.env.PORT || 5000


dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

/* app.get("/", (req, res) => {
    res.send("Hello World")
});
 */


server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})  