import React, { Component } from 'react';

class Reddit extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    fetch('https://www.reddit.com/hot.json')
      .then(response => {
        return response.json()
      })
      .then(articles => {
        this.setState((prevState) => ({
          articles: articles.data.children
        }))
      })

  }

  render() {
    console.log(this.state.articles)
    return (
      <div>
        <h1>Reddit Feed</h1>
      </div>
    )
  }
}

export default Reddit