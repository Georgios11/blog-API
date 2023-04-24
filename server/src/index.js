const express = require("express");
const createError = require("http-errors");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const { restart } = require("nodemon");
const connectDB = require("./config/db");
const dev = require("./config/INDEX.JS");
const blogRouter = require("./routes/blogRoute");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = dev.app.serverPort;
app.listen(PORT, async () => {
  console.log(`server is running on http://localhost:${PORT}`);
  await connectDB();
});

app.get("/test-api", (req, res) => {
  return res.status(200).json({
    message: "API is running",
  });
});
app.use("/api/blogs", blogRouter);
//client error
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

//server error
app.use((err, req, res, next) => {
  const statusCode = err.status;
  res.status(statusCode || 500).json({
    error: {
      statusCode: statusCode || 500,
      message: err.message,
    },
  });
});
// after minute 24
//step 1: created the express server
//step 2:  env variables
//step 3: handle http errors
//step 4: morgan
//step 5: connect to mongoose
//check chalk npm
//step 6: create a model - blog - title-description image
//slug npm
// step 7: MVC architecture
//controllers - routes
//step 8 : express router
//use blogrouter in index.js
//create response handlers in helpers file
//request handler,  response, request handlers
//create blog implementation
//body parser
//create routes
//test createBlog from postman
//form data
//multer to handle files
//middlewares folder
//time 1:06
