const ConnectDB = require("./db/db")
const app = require('./app')
const dotenv = require('dotenv')


dotenv.config()

ConnectDB()
.then(()=>{
    app.listen(process.env.PORT||8000 , ()=>{
        console.log(`server is runnig at port : ${process.env.PORT}  `)
    })
})
.catch((err)=>{
    console.log('MongoDB connection faild !!',err)
})