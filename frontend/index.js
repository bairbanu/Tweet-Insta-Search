import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TweetSearch from './components/TweetSearch'

const TweetInstaSearch = () => {
    return <TweetSearch />
}

ReactDOM.render(<TweetSearch />, document.getElementById('root'))