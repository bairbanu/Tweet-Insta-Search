const axios = require('axios')

const BEARER_ACCESS_TOKEN = require("./bearerToken");

const getTweets = async searchTerm => {
    const responses = await axios
      .get(`https://api.twitter.com/1.1/search/tweets.json?q=${searchTerm}&result_type=recent&count=10`,
        { headers: {
            authorization: "Bearer " + BEARER_ACCESS_TOKEN
          }
        }
      )
    
    return responses.data.statuses.map(tweet => ({ text: response.text }))
}

module.exports = getTweets