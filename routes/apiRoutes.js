var db = require("../models");

//, passport(function param taken out of module.exports)

module.exports = function (app) {
  // Get all Blogs
  app.get("/api/Blogs", function (req, res) {
    db.Blog.findAll({}).then(function (dbBlogs) {
      res.json(dbBlogs);
    });
  });

  //Get route for a single post
  app.get("/api/Blogs/:id", function (req, res) {
    db.Blog.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (dbBlog) {
      res.json(dbBlog);
    });
  });

  // Create a new Blog
  app.post("/api/Blogs", function (req, res) {
    db.Blog.create(req.body).then(function (dbBlog) {
      res.json(dbBlog);
    });
  });

  // Delete an Blog by id
  app.delete("/api/Blogs/:id", function (req, res) {
    db.Blog.destroy({ where: { id: req.params.id } }).then(function (dbBlog) {
      res.json(dbBlog);
    });
  });

  //PUT route for updating posts
  app.put("/api/Blogs", function (req, res) {
    db.Blog.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbBlog) {
        res.json(dbBlog);
      });
  });
};

