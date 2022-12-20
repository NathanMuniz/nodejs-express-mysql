import express from 'express';
import cors from 'cors';
import { route } from './router/router.js'

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.json({ message: "Welcome to my applcation" })
})

route(app)



const PORT = 8080 || env.PORT;

app.listen(PORT, () => {
  console.log('http://localhost:8080')
})








