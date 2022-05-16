const validPost = (req, res,next) => {
    const post = req.body;
    const title = post.title.trim?.() ?? "";
    if (title === "") {
        return res.status(400).json({ msg: "title is required" })  //you have an error to resolve
    }
    next();//all is ok, then execute next function 
}

module.exports = {
    validPost,
};