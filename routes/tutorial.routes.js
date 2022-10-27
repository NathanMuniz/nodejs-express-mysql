module.exports = app => {
  const tutorials = required("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new TUtorail
  router.post("/", tutorials.create);

  // Retrieve alll Tutorails 
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutoraisl 
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id 
  router.get("/:id", tutorials.update);

  // Delete a Tutorial with id 
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorails 
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);

};


