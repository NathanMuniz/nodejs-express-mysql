const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};



app.use(cors(corsOptions));

// parse request of context-type - application/json 
app.use(express.json());

// parse requests of context-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application!" });
});

//require("./app.routes/tutorial.routes.js")(app);

// set prot, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


