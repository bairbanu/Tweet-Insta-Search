require('dotenv').config()

const axios = require('axios')

axios.get('https://api.twitter.com/1.1/search/tweets.json?q=hello&result_type=recent&count=10', {
    headers: {
        authorization: 'Bearer ' + process.env.BEARER_ACCESS_TOKEN
    }
}).then(responses => {
    responses.data.statuses.forEach(response => {
        console.log(response.text)
    })
})