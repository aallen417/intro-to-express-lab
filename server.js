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
  if (!Number.isInteger(parseInt(req.params.number))) {
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

  let filteredShoeType = shoes.filter((shoe) => {
   return shoe.type === req.query.type
  })
  // res.send(filteredShoeType)  
  let filteredShoePrice = shoes.filter((shoe) => {
      return shoe.price === parseInt(req.query.price)
    })
    // res.send(filteredShoePrice)
  })
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})