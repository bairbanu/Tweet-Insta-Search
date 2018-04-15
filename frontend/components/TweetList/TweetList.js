import React from 'react'

const TweetList = ({ tweets }) => {
    const displayList = tweets.length === 0
    ? <p> Search will be displayed here... </p>
    : (
        <ul>
            {
                tweets.map((tweet, index) => <li key={ index }> { tweet.text } </li> ) 
            }
        </ul>
      )

    return (
        <div>
            { displayList }
        </div>
    )
}

export default TweetList