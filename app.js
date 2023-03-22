const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const hbs = require('express-handlebars')

/*configure mongoose*/
mongoose
  .connect('mongodb://localhost:27017/cms-practice')
  .then((res) => {
    console.log('MongoDB connected!')
  })
  .catch((err) => {
    console.log('MongoDB connection failed')
  })

/* Configuring express */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

/*
Setup views engine to use handlebars
*/
app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

/* Routes */
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))
