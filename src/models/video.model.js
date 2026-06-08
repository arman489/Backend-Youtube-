const mongoose = require('mongoose')
const mongoosePaginate = require("mongoose-paginate-v2");

const videoSchema = new mongoose.Schema(
    {
       videoFile:{
        type:String,
        required:true,
       },
       thumbnail:{
        type:String,
        required:true,
       },
       title:{
        type:String,
        required:true,
       },
       description:{
        type:String,
        required:true,
       },
       duration:{
        type:Number, // cloudnary
        required:true,
       },
       views:{
        type:Number,
        dafault:0
       },
       isPublished:{
        type:Boolean,
        default:true
       },
       owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
       }

    },
    {timestamps:true}
)
videoSchema.plugin(mongoosePaginate);

const Video = mongoose.model('Video',videoSchema)
module.exports = Video