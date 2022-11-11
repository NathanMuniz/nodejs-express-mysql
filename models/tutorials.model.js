const connetion = require('./db.js')

connection = require('./db.js')

const Tutorial = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
}

Tutorial.create = (tutorial, result) => {
  connetion.query("INSERT INTO tutorials SET ? ", newTutorials,)
}

