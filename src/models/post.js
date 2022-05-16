const mongoose = require('mongoose');


const ComentSchema = new mongoose.Schema(
    {
        author:{
            type:String,
            required: true
        },
        comment:{
            type:String,
            required:true
        }
    }
)

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        body: {
            type: String,
            require: true
        },
        imgageUrl: {
            type: String
        },
        author: {
            type: String,
            require: true
        },
        comments: [ComentSchema],
    }, {timestamps:true}
);

const PostModel = mongoose.model('Post',PostSchema);

module.exports = PostModel;