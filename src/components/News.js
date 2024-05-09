import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page : 1
        }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3413befeb96046f5ac57b8e45967a113&page=1&pageSize=20";
      let data= await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData.totalResults);
      this.setState({
        articles: parsedData.articles,
        loading: true,
        totalresult: parsedData.totalResults
      })
    }

    handlePrevClick=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3413befeb96046f5ac57b8e45967a113&page=${this.state.page-1}&pageSize=20`;
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: true,
        page:this.state.page-1
      })
    }
    handleNextClick=async ()=>{
      if(this.state.page+1<Math.ceil(this.state.totalresult/20)){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3413befeb96046f5ac57b8e45967a113&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({
          page:this.state.page+1,
          articles: parsedData.articles,
          loading: true
        })
    }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>Daily News - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col md-4" key={element.url}>
           <NewsItem title={element.title ? element.title : "" } description={(element.description) ? element.description+"..." : "" } imageUrl={element.urlToImage} newsUrl={element.url} />
       </div>
        })}            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
      
    )
  }
}

export default News


