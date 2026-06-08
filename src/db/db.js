const mongoose = require('mongoose')
const DB_NAME  = require('../constants')
const ConnectDB = async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST ${connectionInstance}`)
    } catch (error) {
        console.log("mongoDB connection FAILD",error)
        process.exit(1)
    }
}

module.exports = ConnectDB