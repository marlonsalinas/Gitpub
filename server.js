//Express required to run app
const reponse = require('express');
const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks');
const food = require('./models/food');


app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { allDrinks: drinks,
    allFoods: food });
})

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render("drinks_show.ejs", { allDrinks: drinks[req.params.indexOfDrinksArray]});
});

app.get('/drinks/:indexOfFoodArray/food', (req, res) => {
  res.render("food_show.ejs", { allFoods: food[req.params.indexOfFoodArray]});
})

app.get('/',(req, res) => {
    res.send('Welcome to the Gitpub App!')
})

//Express web server port - app.listen
app.listen(port, () => {
    console.log("Oh it's listening alright!", port);
})