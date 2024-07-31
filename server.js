// import modules

import express from 'express'

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




// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})