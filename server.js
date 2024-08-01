// import modules

import express from 'express'
import { collectibles } from './data/collectibles.js'
import { shoes } from './data/shoes.js'
// create Express app

const app = express()

// configure the app (app.set)



// mount Middleware (app.use)



// mount routes
app.get("/greetings/:username", function(req, res) {
  res.send(`Hello there, ${req.params.username}!`)
})

app.get("/roll/:number", function(req, res) {
  if (isNaN(parseInt(req.params.number))) {
    res.send("You must specify a number.")
  } else {
    function randomNumberGen(number) {
      return Math.floor(Math.random() * number + 1)
    }
    res.send(`You rolled a ${randomNumberGen(req.params.number)}`)
  }
})

app.get("/collectibles/:index", function(req, res) {
    if (req.params.index > collectibles.length - 1) {
    res.send("This item is not yet in stock. Check back soon!")
    } else {
      res.send(collectibles[req.params.index])
    }
})

app.get("/shoes", function(req, res) {
  const minPrice = req.query["min-price"] ? req.query["min-price"] : 0
  const maxPrice = req.query["max-price"] ? req.query["max-price"] : Infinity
  const type = req.query.type ? req.query.type : ""
  const filteredShoes = shoes.filter(shoe => {
  return shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type.includes(type)
  }) 
  res.send(filteredShoes)
})
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})