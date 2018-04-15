import axios from 'axios'

const requestTweets = async searchTerm => {
    const { data } = await axios.get(`http://localhost:3000/tweets?searchTerm=${searchTerm}`)
    return data
}

export default requestTweets