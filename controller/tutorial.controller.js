import { Tutorial } from '../models/tutorial.model.js'


export function create(req, res) {
  if (Object.keys(req.body) === 0) {
    res.status(400).send({
      message: `Content can not be emtpy! `
    })
  }

  const newTutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  })

  Tutorial.create(newTutorial, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while creatin the Tutorial"
      })
    } else res.send(data)
  })
}

export function findAll(req, res) {

  Tutorial.getAll(req.body.title, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while cration tutorial"
      })
    } else res.send(data)
  })
}


export function findOne(req, res) {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind = "not_found") {
        res.status(404).send({
          message: "Not found especific id"
        })
      } else {
        res.status(500).send({
          message:
            err.message || "Some error find tutorial"

        })
      }
    } else res.send(data)
  })

}

export function findPublished(req, res) {
  Tutorial.getAllPublished((err, data) => {
    if (err) {
      res.status(500).send(
        err.message || { message: "error" })
    } else {
      res.send(data)
    }
  })
}


export function updateTutorial(req, res) {
  if (!req.params.id || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Bad Request, please, insert the id and the new dates"
    })
  }
  const newData = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  })


  Tutorial.updateById(req.params.id, newData, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}`
        });
      } else {
        req.status(500).send({
          message: "Error updating TUroial with id" + req.params.id
        })
      }
    } else res.send(data)
  }
  )
}

export function removeAll(req, res) {
  Tutorial.removeAll((err, data) => {
    if (err) {
      res.status(500).send(
        err.message || { message: "Internal error" })
    }

    res.send(data)

  })
}




export function removeById(req, res) {

  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send(
          err.message || { message: "Not found especific id" }
        )
      }
      res.status(500).send(
        err.message || { message: "Internal error" }
      )
    }
    res.send(data)

  })
}



