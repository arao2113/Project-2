var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/parts", function(req, res) {
    db.Part.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/parts", function(req, res) {
    db.Part.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/parts/:id", function(req, res) {
    db.Part.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
