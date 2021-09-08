// Import packages
//const { default: axios } = require('axios')
const express = require('express')
const axios = require('axios')
const morgan = require('morgan')



//Using packages
const app = express()

//set port for APP
let port = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(morgan('dev'))

//Definition Routes
app.get('/', (req, res) => { //get para que lo tome el puerto
    res.send("<h1> Hello people </h1>")
})


//GET method for films
app.get('/films', (req, res) => {
    const END_POINT = 'https://ghibliapi.herokuapp.com/films/'

    axios.get(END_POINT)
    .then(function (response) {
        //console.log(response.data);
        res.send(response.data)
    })
})

//GET method for people
app.get('/people', (req, res) => {
    const END_POINT = 'https://ghibliapi.herokuapp.com/people/'

    axios.get(END_POINT)
    .then(function (response) {
        res.send(response.data)
    })
})

//GET method for locations
app.get('/locations', (req, res) => {
    const END_POINT = 'https://ghibliapi.herokuapp.com/locations/'

    axios.get(END_POINT)
    .then(function (response) {
        res.send(response.data)
    })
})

//GET method for species
app.get('/species', (req, res) => {
    const END_POINT = 'https://ghibliapi.herokuapp.com/species/'

    axios.get(END_POINT)
    .then(function (response) {
        res.send(response.data)
    })
})

//GET method for vehicles
app.get('/vehicles', (req, res) => {
    const END_POINT = 'https://ghibliapi.herokuapp.com/vehicles/'

    axios.get(END_POINT)
    .then(function (response) {
        res.send(response.data)
    })
})

//POST method for films
app.post('/select-film', (req, res) => {
    const { id } = req.body
    //console.log(id)
    const END_POINT = 'https://ghibliapi.herokuapp.com/films/' + id
    axios.get(END_POINT)
        .then(function(response) {
            if(id == undefined || id == null || id == "")
                res.status(404).send("Error 404: The content of the variable id is not accepted")
            const { title, description, director, producer } = response.data
            res.status(200).json({title, description, director, producer })
            //res.send(response.data)
        })
        .catch(function(error) {
            console.log(error)
            const { message } = error
            res.status(404).json({ message })
        })
    //console.log(name);
    //res.send(name)
})

//POST method for people
app.post('/select-people', (req, res) => {
    const { id } = req.body
    const END_POINT = 'https://ghibliapi.herokuapp.com/people/' + id
    axios.get(END_POINT)
        .then(function(response) {
            if(id == undefined || id == null || id == "")
                res.status(404).send("Error 404: The content of the variable id is not accepted")
            const { name, gender, age } = response.data
            res.status(200).json({name, gender, age })
        })
        .catch(function(error) {
            console.log(error)
            const { message } = error
            res.status(404).json({ message })
        })
})

//POST method for locations
app.post('/select-location', (req, res) => {
    const { id } = req.body
    const END_POINT = 'https://ghibliapi.herokuapp.com/locations/' + id
    axios.get(END_POINT)
        .then(function(response) {
            if(id == undefined || id == null || id == "")
                res.status(404).send("Error 404: The content of the variable id is not accepted")
            const { name, climate, terrain } = response.data
            res.status(200).json({name, climate, terrain })
        })
        .catch(function(error) {
            console.log(error)
            const { message } = error
            res.status(404).json({ message })
        })
})

//POST method for species
app.post('/select-specie', (req, res) => {
    const { id } = req.body
    const END_POINT = 'https://ghibliapi.herokuapp.com/species/' + id
    axios.get(END_POINT)
        .then(function(response) {
            if(id == undefined || id == null || id == "")
                res.status(404).send("Error 404: The content of the variable id is not accepted")
            const { name, classification } = response.data
            res.status(200).json({name, classification })
        })
        .catch(function(error) {
            console.log(error)
            const { message } = error
            res.status(404).json({ message })
        })
})

//POST method for vehicles
app.post('/select-vehicle', (req, res) => {
    const { id } = req.body
    const END_POINT = 'https://ghibliapi.herokuapp.com/vehicles/' + id
    axios.get(END_POINT)
        .then(function(response) {
            if(id == undefined || id == null || id == "")
                res.status(404).send("Error 404: The content of the variable id is not accepted")
            const { name, description, vehicle_class } = response.data
            res.status(200).json({name, description, vehicle_class })
        })
        .catch(function(error) {
            console.log(error)
            const { message } = error
            res.status(404).json({ message })
        })
})

//Listen server
app.listen(port, () => {
    console.log("Server running on port " + port);
})