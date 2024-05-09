import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
        <div  className="card" style={{width: "18rem"}}>
        <img src={!imageUrl ? "https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po=": imageUrl}  className="card-img-top" alt="..." />
        <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">{description}</p>
            <a href={newsUrl} target='_blank'  className="btn btn-sm btn-primary btn btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
