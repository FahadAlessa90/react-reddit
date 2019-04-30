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

    const allArticles = this.state.articles.map((article, index) => {
      return (
        <div key={index}>
          <img src={article.data.thumbnail} alt={article.data.title} />
          <a href={article.data.url} target="_blank" rel="noopener noreferrer">{article.data.title}</a>
        </div>
      )
    })


    return (
      <div>
        <h1>Reddit Feed</h1>
        <div>
          {allArticles}
        </div>
      </div>
    )
  }
}

export default Reddit