const { posts } = require("../routes/posts");
const PostsServices = require('../services/posts-services')

const listPost = async (req, res) => {
    try {
        const posts = await PostsServices.listPost();
        res.setHeader("Total", posts.length);
        res.json(posts);
    } catch (e) {
        res.status(500).json({ message: "Internal Error" })
    }

};

const savePost = async (req, res, next) => {
    const post = req.body;

    try {
        const savedPost = await PostsServices.savePost(post)
        res.status(201).json(savedPost)
    } catch (e) {
        next(error);
    }
};

const getPost = async (req, res, next) => {
    const { id } = req.params
    try {
        const post = await PostsServices.getPost(id)
        if (!post) {
            return res.status(404).send({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        next(error)
    }

};


const deletePost = async (req, res, next) => {///chechar esta mande
    const { id } = req.params
    try {
        await PostsServices.deletePost(id)
        res.status(204).send();
    } catch (error) {
        next(error)
    }

    const postIndex = posts.findIndex(post => post.id === id)


    posts.splice((postIndex, 1))

}

const upDatePost = async (req, res, next) => {
    const { id } = req.params


    const newPostInfo = req.body;

    try {
        const upDatePost = await PostsServices.upDatePost(id, newPostInfo);
        if (!upDatePost) {
            return res.status(404).send({ message: 'Post not found' });
        }
        res.json(upDatePost);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listPost,
    savePost,
    getPost,
    deletePost,
    upDatePost,
};