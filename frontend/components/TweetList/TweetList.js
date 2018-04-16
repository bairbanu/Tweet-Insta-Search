import React from 'react'
import PropTypes from 'prop-types'

import './tweetList.css'

const TweetList = ({ tweets, searchTerm }) => {
    let displayList

    if (searchTerm === '' && tweets.length === 0)
        displayList = <p> Search will be displayed here... </p>
    else if (searchTerm !== '' && tweets.length === 0)
        displayList = <p> Press enter to see tweets... Or try another search if no results :) </p>
    else 
        displayList = ( <ul> { tweets.map((tweet, index) => <li key={ index }> { tweet.text } </li> ) } </ul> )

    return (
        <div>
            { displayList }
        </div>
    )
}

TweetList.propTypes ={
    tweets: PropTypes.array.isRequired,
    searchTerm: PropTypes.string
}

export default TweetList