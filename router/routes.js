module.export = app => {
  const tutorials = require('../models/tutorials.model.js')

  const router = require('express').Router();

  router.post("/", tutorials.create())

  router.get("/", tutorials.getAll())

  router.get('/published', tutorials.getAllPublished())

  router.put('/update/<id>', tutorials.update())

  app.use('/api/tutorials', router);

};


