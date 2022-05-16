const express = require("express");
const routerPosts= express.Router();

const postController = require('../controller/posts-Controller');

const middlewereValid = require('../middlewares/posts-middlewares')

routerPosts.get('/',postController.listPost);

routerPosts.post('/',middlewereValid.validPost,postController.savePost);

routerPosts.get('/:id',postController.getPost);

routerPosts.delete('/:id',postController.deletePost);

routerPosts.put('/:id',postController.upDatePost) 

module.exports =routerPosts;