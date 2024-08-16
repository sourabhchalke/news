import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        sortBy:"popularity",
        pageSize:15,
      }

    static propTypes={
        sortBy:PropTypes.string,
        pageSize:PropTypes.number,
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading:false,
            page: 1,
            
        };
    }

    async componentDidMount() {
        this.props.setProgress(10);
        console.log("Mounting....");
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=${this.props.sortBy}&apiKey=17e04a031e174e38887e44cd5ee97426&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        this.props.setProgress(20);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            loading:false
        });
        this.props.setProgress(100);
    }

    onNext = async () => {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=${this.props.sortBy}&apiKey=17e04a031e174e38887e44cd5ee97426&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        this.props.setProgress(25);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1,
            loading:false
        });
        this.props.setProgress(100);
    }
    onPrevious = async () => {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=${this.props.sortBy}&apiKey=17e04a031e174e38887e44cd5ee97426&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});
        this.props.setProgress(25);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading:false
        });
        this.props.setProgress(100);
    }

    render() {
        return (

            <div className='row p-0 m-0'>
                <div className='col-12 col-md-11 mx-auto mt-5 mb-5'>
                    <h2 className='text-center mt-5'>Tech Crunch - {this.props.sortBy==="popularity"?"Popular News":"Latest News"}</h2>

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
                                        publishedAt={elements.publishedAt}
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
