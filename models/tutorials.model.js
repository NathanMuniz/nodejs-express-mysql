const sql = require('./db.js')


const Tutorial = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
}

Tutorial.create = (newTutorials, result) => {
  sql.query("INSERT INTO tutorials SET ? ", newTutorials, (err, res) => {
    if (err) {
      console.log("[ERROR], NOT CREATED ", err)
      result(err, null)
      return;
    }
    console.log("Tutorial Created ", { id: res.insertId, ...newTutorials })
    result(null, { id: res.insertId, ...newTutorial })

  })
}


Tutorial.findId = (id, result) => {
  sql.query(`SELECT * FROM tutorials WHERE id=${id}`, (err, res) => {
    if (err) {
      console.log("Error ", err);
      result(err, null)
      return;
    }
    if (res.length) {
      console.log("foudn tutorial", res[0])
      result(null, res[0])
      return;
    }

    console.log("not found")
    result({ kind: "not_found" }, null);

  })
}


Tutorial.getAll = (title, result) => {
  let query = "SELECT * FROM tutorials"

  if (title) {
    query += `WHERE LIKE %${title}`
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Erro: ", err)
      result(err, null)
      return
    }

    console.log("Tutorails: ", res)
    result(null, res)

  })

}

Tutorial.getAllPublished = (result) => {
  sql.query("SELECT * FROM tutorails WHERE published=true", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
    }

    console.log("Tutorials published: ", res)
    result(null, res)

  })
}


Tutorial.update = (id, tutorial, result) => {
  sql.query("UPDATE tutorials SET title=?, description=?, published? WHERE id ?"
  [tutorial.title, tutorial.description, tutorial.published, id], (err, res) => {
    if (err) {
      console.log("errror: ", err),
        result(err, null)
      return;
    }

    if (res.afftetedRows == 0) {
      result({ kind: "not_found" }, null)
    }

    console.log("updated tutotials: ", { id: id, ...tutorial });
    result(null, { id: id, ...tutorial })

  })
}

Tutorial.remove = (id, result) => {
  sql.query(`DELETE FROM tutorials WHERE id=${id}`, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return;
    }

    if (res.afftetedRows == 0) {
      console.log("Tutorials not found")
      result({ kind: "not_found" }, null)
      return;
    }

    console.log("Turial find: ", { id: id, ...turials })
    result(null, { id: id, ...tutorials })


  })
}

Tutorial.removeAll = (result) => {
  sql.query("DELETE + FROM tutorails", (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
      return
    }

    console.log(`deletes ${afftetedRows} tutorails`)
    result(null, res)

  })
}

module.exports = Tutorial;
