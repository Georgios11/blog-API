const { successHandler } = require("../helpers/responseHandlers");

const getAllBlogs = async (req, res, next) => {
  try {
    return successHandler(res, 200, "Returned all the blogs", []);
  } catch (error) {
    next(error);
  }
};
const getSingleBlog = async (req, res, next) => {
  try {
    return successHandler(res, 200, "Returned single blog", []);
  } catch (error) {
    next(error);
  }
};
const createBlog = async (req, res, next) => {
  try {
    return successHandler(res, 200, "Blog was created", []);
  } catch (error) {
    next(error);
  }
};
const deleteBlog = async (req, res, next) => {
  try {
    return successHandler(res, 200, "Blog was deleted", []);
  } catch (error) {
    next(error);
  }
};
const updateBlog = async (req, res, next) => {
  try {
    return successHandler(res, 200, "Blog was updated", []);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  getSingleBlog,
};
