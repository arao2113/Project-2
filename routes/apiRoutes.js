var db = require("../models");

module.exports = function(app) {
  // Get all parts
  app.get("/api/part", function(req, res) {
    db.Part.findAll({
      include: [db.Part]
    }).then(function(dbPart) {
      res.json(dbPart);
    });
  });

  // Get a specific part
  app.get("/api/part/:id", function(req, res) {
    db.Part.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Part]
    }).then(function(dbPart) {
      res.json(dbPart);
    });
  });

  // Create a new part for sale
  app.post("/api/part", function(req, res) {
    db.Part.create(req.body).then(function(dbExample) {
      res.json(dbPart);
    });
  });

  // Delete or buy an item
  app.delete("/api/part/:id", function(req, res) {
    db.Part.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbPart) {
      res.json(dbPart);
    });
  });

};
