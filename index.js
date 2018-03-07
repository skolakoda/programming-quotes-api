require('dotenv').load()
const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const WebSocket = require('ws')
const mongoose = require('mongoose')
 

const filmovi = require('./rute/filmoviRouter')
const citati = require('./rute/citatiRouter')
const mongoUri = require('./config').mongoUri

mongoose.connect(mongoUri)
mongoose.Promise = global.Promise

mongoose.connect(mongoUri)
mongoose.Promise = global.Promise

const port = process.env.PORT || 3001
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/filmovi', filmovi)
app.use('/citati', citati)


app.get('/', (req, res) => res.send('Baza podataka u izgradnji.'))

app.listen(port, () => console.log('Server on port', port))
