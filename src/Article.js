import React from 'react';

function Article(props) {
  return (
    <div class="col-lg-6">
      <div class="card">
        <img src={props.article.thumbnail} class="card-img-top" alt={props.article.title} />
        <div class="card-body">
          <h5 class="card-title">{props.article.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={props.article.url} class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Article;