const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const getTweets = require('../../API/tweets')

router.post('/', urlencodedParser, async (req, res) => {
    const { searchTerm } = req.body
    const tweets = await getTweets(searchTerm)
    res.send(tweets)
})

module.exports = router