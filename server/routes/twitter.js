const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const getTweets = require('../../API/tweets')

router.get('/', async (req, res) => {
    const { searchTerm } = req.query
    // const tweets = await getTweets(searchTerm)
    // console.log('these are the tweets:::', tweets)
    // res.send(tweets)
    res.end()
})

module.exports = router