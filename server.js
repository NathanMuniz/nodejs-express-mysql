import express from 'express';
const app = express();

app.use((req, res, next) => {
  console.log("Time: " + Date.now())
  next()
})

app.get('/user/:id', (req, res, next) => {
  if (req.params.id === "0") next('route')
  else next()
}, (req, res, next) => {
  res.send('Next middleware')
})

app.get('/user/:id', (req, res, next) => {
  res.send("Next route")
})




const PORT = 8080

app.listen(PORT, () => {
  console.log("localhost:8080")
})


