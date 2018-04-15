import _ from 'lodash'
import React, { Component } from 'react'
import axios from 'axios'

import TweetList from '../TweetList/TweetList'
import './tweetSearch.css'

export default class TweetSearch extends Component {
    state = {
        value: '',
        tweetList: []
    }

    onSubmitSearch = async event => {
        event.preventDefault()

        const { data } = await axios.get(`http://localhost:3000/tweets?searchTerm=${this.state.value}`)
        this.setState({ tweetList: data })
    }

    instaSearch = event => {
        this.setState({ value: event.target.value })

        setTimeout(async () => {
            const { data } = await axios.get(`http://localhost:3000/tweets?searchTerm=${this.state.value}`)
            this.setState({ tweetList: data })
        }, 500)
    }

    render() {
        return (
            <div className='app-container'>
                <form onSubmit={ this.onSubmitSearch }>
                    <input 
                        value={ this.state.value } 
                        onChange={ this.instaSearch } 
                        placeholder='Instantly search latest tweets...'
                    />
                    <button style={{ display: 'none' }}> For UX - just press enter </button>
                </form>

                <TweetList tweets={ this.state.tweetList } />
            </div>
        )
    }
}