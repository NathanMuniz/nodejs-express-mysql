const Tutorial = require('../models/tutorials.model.js')


exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
  }

  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    publisehd: req.body.description || false
  });

  Tutorial.create(tutorial, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some erro occurred whil create"
      })
    }
    else res.send(data);

  })

}

exports.findById = (req, res) => {
  if (!req.params.id) {
    req.status(400).send({
      message: "You need send a id to find a Tutorial"
    });
  }

  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Nto found Tutorial with di ${req.params.id}`
        })
      } else {
        res.status(500).send({
          message: err.message || "Some internal error"
        });
      }
    }
    else res.send(data)
  })

}



exports.findAll = (req, res) => {
  const title = req.query.title;

  Tutorial.findAll(title, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some internal error"
      })
    }
    else res.send(data)
  })
}

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "You need send data to update"
    });
  };

  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.publisehd || false
  })

  Tutorial.updateById(res.params.id, tutorial, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          menssage: err.message || "Not found the id"
        });
      } else {
        res.status(500).send({
          message: err.message || "Internal error"
        })
      }
      res.send(data)

    }
  })

}

exports.remove = (req, res) => {
  Tutorial.removeById(res.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: err.message || "Not found the especificaced id"
        })
      } else {
        res.status(500).send({
          message: err.message || "Internal error"
        })
      }
    } else res.send({ message: `Tutorial was deleted successfuly!` })

  })

}

exports.removeAll = (req, res) => {
  Tutorial.remove((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Not possible to delete"
      })
    } else res.send({ message: "Tutorials was deleted succesfulty!" })
  })
}



