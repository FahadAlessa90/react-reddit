import React from 'react';

function Article(props) {
  return (
    <div>
      <img src={props.article.thumbnail} alt={props.article.title} />
      <a href={props.article.url} target="_blank" rel="noopener noreferrer">{props.article.title}</a>
    </div>
  );
}

export default Article;