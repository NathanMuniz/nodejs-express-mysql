import * as tutorial from '../controller/tutorial.controller.js';
import express from 'express'

function route(app) {


  var router = express.Router()


  // Create 
  router.post("/", tutorial.create)

  router.get("/published", tutorial.findPublished)

  // find all 
  router.get("/", tutorial.findAll)


  // find one 
  router.get("/:id", tutorial.findOne)

  router.put("/update/:id", tutorial.updateTutorial)

  router.delete("/", tutorial.removeAll)

  router.delete("/:id", tutorial.removeById)

  app.use('/api/tutorials', router)

}

export { route }; 
