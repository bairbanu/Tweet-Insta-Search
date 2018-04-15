import React, { Component } from 'react'
import axios from 'axios'

import TweetList from '../TweetList/TweetList'
import './tweetSearch.css'

export default class TweetSearch extends Component {
    state = {
        value: '',
        tweetList: []
    }

    onSubmit = async event => {
        event.preventDefault()

        const { data } = await axios.get(`http://localhost:3000/tweets?searchTerm=${this.state.value}`)
        this.setState({ tweetList: data })
    }

    render() {
        return (
            <div className='app-container'>
                <form onSubmit={ this.onSubmit }>
                    <input 
                        value={ this.state.value } 
                        onChange={ event => this.setState({ value: event.target.value })} 
                        placeholder='Instantly search latest tweets...'
                    />
                </form>

                <TweetList tweets={ this.state.tweetList } />
            </div>
        )
    }
}