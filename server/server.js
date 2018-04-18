require('babel-register')
require('babel-polyfill')

const express = require('express')
const app = express()

const cors = require('cors')

const twitterAPI = require('./routes/twitter')
const notFound = require('./routes/notFound')
const errorHandler = require('./routes/errorHandler')

const port = process.env.PORT || 3000

app.use(cors())
app.use('/tweets', twitterAPI)
app.use('*', notFound)
app.use(errorHandler)

const server = app.listen(port, () => {
    console.log(`Twitter Insta-Search server is listening on port: ${port}`)
})

module.exports = server