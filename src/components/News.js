import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading:false,
            page: 1,
            
        };
    }

    async componentDidMount() {
        console.log("Mounting....");
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=17e04a031e174e38887e44cd5ee97426&page=${this.state.page}&pagesize=15`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            loading:false
        });
    }

    onNext = async () => {
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=17e04a031e174e38887e44cd5ee97426&page=${this.state.page + 1}&pagesize=15`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1,
            loading:false
        });
    }
    onPrevious = async () => {
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=17e04a031e174e38887e44cd5ee97426&page=${this.state.page - 1}&pagesize=15`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading:false
        });
    }

    render() {
        return (

            <div className='row p-0 m-0'>
                <div className='col-12 col-md-11 mx-auto mt-5 mb-5'>
                    <h2 className='text-center mt-5'>Tech Crunch</h2>

                    {this.state.loading && <Spinner/>}

                    <div className="row mt-2  gy-5">
                        {!this.state.loading && this.state.articles.map((elements) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4 gy-5 mb-5" key={elements.url}>
                                    <NewsItems
                                        author={elements.author}
                                        title={elements.title}
                                        urlImg={elements.urlToImage}
                                        description={elements.description}
                                        url={elements.url}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className='d-flex justify-content-between mt-5'>
                        <button className='btn btn-dark px-5 py-2' disabled={this.state.page<=1} onClick={this.onPrevious}>&larr; Previous</button>
                        <button className='btn btn-dark px-5 py-2' onClick={this.onNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
