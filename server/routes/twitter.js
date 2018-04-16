const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const getTweets = require('../../API/tweets')

router.get('/', async (req, res, next) => {
    const { searchTerm } = req.query

    try {
        const tweets = await getTweets(searchTerm)
        res.send(tweets)
    } catch (error) {
        console.log('A error occured while retrieving tweets')
        next(error)
    }
})

module.exports = router