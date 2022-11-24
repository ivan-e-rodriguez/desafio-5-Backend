const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('/public'))

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

const productos = [
  {
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    "id": 1
  },
  {
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    "id": 2
  },
  {
    "title": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    "id": 3
  }
]


app.get('/productos', (req, res) => {
  let listaProductos = false;

  if (productos.length > 0) {
    listaProductos = true
  }

  res.render('./partials/productos', { listaProductos: listaProductos, productos: productos })
})

app.post('/productos', (req, res) => {
  
  productos.push(req.body)
  res.redirect('/productos')
})




const server = app.listen(8080, () => {
  console.log("Escuchando en 8080");
})