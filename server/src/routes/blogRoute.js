const express = require("express");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controllers/blogController");

const blogRouter = express.Router();

blogRouter.route("/").get(getAllBlogs).post(createBlog);

blogRouter.route("/:id").get(getSingleBlog).put(updateBlog).delete(deleteBlog);
blogRouter.use("*", (req, res, next) => {
  res.send("Route not found");
});
module.exports = blogRouter;
