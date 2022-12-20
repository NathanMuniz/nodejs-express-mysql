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
      res.status(500).send({
        message:
          err.message || "Some error find tutorial"

      })
    } else res.send(data)
  })

}



