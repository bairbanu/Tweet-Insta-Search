const express = require('express')
const router = express.Router()

const axios = require("axios")

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const BEARER_ACCESS_TOKEN = require("../../API/bearerToken")

router.post('/', urlencodedParser, (req, res) => {
    res.send(req.body)
})

module.exports = router



// axios
//   .get(
//     `https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=recent&count=10`,
//     {
//       headers: {
//         authorization: "Bearer " + BEARER_ACCESS_TOKEN
//       }
//     }
//   )
//   .then(responses => {
//     responses.data.statuses.forEach(response => {
//       console.log(response.text);
//     });
//   });
