import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TweetSearch from './components/TweetSearch/TweetSearch'

const TweetInstaSearch = () => {
    return <TweetSearch />
}

ReactDOM.render(<TweetInstaSearch />, document.getElementById('root'))