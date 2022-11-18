const { query } = require('express')
const mysql = require('./db.js')

const Tutorial = (tutorial) => {
  self.title = tutorial.title
  self.description = tutorial.description
  self.published = tutorial.published
}


Tutorial.create = (newTutorial, result) => {
  mysql.query("INSERT INTO tutorials SET ? ", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return;
    }

    console.log("Tutorial Created", { id: res.insertId, ...newTutorial })
    result(null, { id: res.insertId, ...newTutorial })

  })

}

Tutorial.findById = (id, result) => {
  mysql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return;

    }

    if (res.length) {
      console.log("Tutorial find", res[0])
      result(null, res[0])
      return;
    }

    console.log(`not_found element with ${id}`)
    result({ kind: "not_found" }, null)

  })
}



Tutorial.findAll = (title, result) => {
  query = "SELECT * FROM tutorials"

  if (title) {
    query += `WHERE title = %${title}`
  }

  mysql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return;
    }

    if (res.length) {
      console.log("Tutorials: ", res)
      result(null, res)
      return
    }

    result({ kind: "not_found" }, null)


  })

}

Tutorial.published = (result) => {
  mysql.query("SELECT * FROM tutorials WHERE published = true", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return;
    }

    console.log("Tutorals published: ", res)
    result(null, res)

  })
}

Tutorial.updateById = (id, tutorial, result) => {
  mysql.query("UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("erro: ", err)
        result(err, null)
        return;
      }

      if (res.affctedRows == 0) {
        console.log("Not found")
        result({ kind: "not_found" }, null)
        return;
      }

      console.log("Tutorial updates: ", { id: id, ...tutorial })
      result(null, { id: id, ...tutorial })
    })
}


Tutorial.removeById = (id, result) => {
  mysql.query(`DELETE FROM tutorials WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return;
    }

    if (res.affctedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("delted tutorials with id: ", id)
    result(null, res)

  })
}


Tutorial.remove = (result) => {
  mysql.query("DELETE * FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
    }

    if (res.affctedRows == 0) {
      console.log("not_found")
      result({ kind: "not_found" }, null)
    }

    console.log("All tutorials deleted")
    result(null, res)



  })
}

module.exports = Tutorial;