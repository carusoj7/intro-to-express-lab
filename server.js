// import modules

import express from 'express'

import { friends } from './data/friend.data.js'

// create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes

app.get('/', function(req, res) {
  res.redirect('/friends')
})

app.get('/friends', function(req, res) {
  res.render('friends/index', {
    friends: friends
  })
})

app.get('/home', function(req, res) {
  res.render('home')
})
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})