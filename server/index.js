var constants = require('./utils/consts');

console.log(constants.RfplTeams); // 'some value'

const express = require('express')
const app = express()
const port = 8080
const pari = {team1:"Zenit", team2:"Spartak"}
var cors = require('cors');
app.use(cors())

app.get('/api/getPari', (req, res) => {
    res.send(constants.RfplTeams)
})

app.get('/api/getSportsList', (req, res) => {
    res.send(constants.SportsList)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})