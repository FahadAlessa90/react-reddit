import React, { Component } from 'react';
import Article from './Article';

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
      return <Article key={index} article={article.data} />
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