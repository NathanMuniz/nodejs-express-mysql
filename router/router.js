import * as tutorial from '../controller/tutorial.controller.js';
import express from 'express'

function route(app) {


  var router = express.Router()


  // Create 
  router.post("/", tutorial.create)

  // find all 
  router.get("/", tutorial.findAll)


  // find one 
  router.get("/:id", tutorial.findOne)

  app.use('/api/tutorials', router)

}

export { route }; 
