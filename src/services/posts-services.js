const Post = require('../models/post');

const listPost =async () =>{
    const posts = await Post.find().lean().exec();//lean is there because you need to return a response
    return posts
}

const savePost = async (post)=>{
    const newPost = new Post (post);
    await newPost.save();
    return newPost;
}

const getPost = async (id)=>{
    const post = await Post.findById(id).lean().exec();
    return post;
}

const upDatePost = async (id,newPostInfo)=>{
    const post = await Post.findByIdAndUpdate(id,newPostInfo,{returnDocument:"after",}).lean().exec();
    return post
}

const deletePost = async(id)=>{
    await Post.findByIdAndDelete(id).exec();
}


module.exports = {
    listPost,
    savePost,
    getPost,
    upDatePost,
    deletePost,
}