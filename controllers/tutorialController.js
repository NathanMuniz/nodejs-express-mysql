const Tutorial = require('../models/tutorials.model.js')

export.create = (req, res) => {
  if (!req.body) {
    res.status.send(400)({
      message: "Content cannot by empty!"
    })
  }




}



