import React, { Component } from 'react'
import axios from 'axios'

import TweetList from './TweetList'

export default class TweetSearch extends Component {
    state = {
        value: '',
        tweetList: []
    }

    onSubmit = async event => {
        event.preventDefault()

        const tweets = await axios.get(`http://localhost:3000/tweets?searchTerm=${this.state.value}`)
        console.log('these are the tweets:::', tweets)
        this.setState({ tweetList: tweets.data })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <label> Tweet InstaSearch </label>
                    <input value={ this.state.value } onChange={ event => this.setState({ value: event.target.value })} />
                    <button> Submit </button>
                </form>

                <TweetList tweets={ this.state.tweetList } />
            </div>
        )
    }
}