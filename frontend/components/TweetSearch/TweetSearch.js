import React, { Component } from 'react'

import TweetList from '../TweetList/TweetList'
import './tweetSearch.css'

import requestTweets from '../../model/requestTweets'

export default class TweetSearch extends Component {
    state = {
        value: '',
        tweets: []
    }

    onSubmitSearch = async event => {
        event.preventDefault()

        try {
            const tweets = await requestTweets(this.state.value)
            this.setState({ tweets })
        } 
        catch (error) {
            // add handler for production code
        }
    }

    render() {
        return (
            <div className='app-container'>
                <form onSubmit={ this.onSubmitSearch }>
                    <input 
                        value={ this.state.value } 
                        onChange={ event => this.setState({ value: event.target.value }) } 
                        placeholder='Instantly search latest tweets...'
                    />
                    <button style={{ display: 'none' }}> For UX - just press enter </button>
                </form>

                <TweetList tweets={ this.state.tweets } searchTerm={ this.state.value }/>
            </div>
        )
    }
}