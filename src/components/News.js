import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page:1
        }
    }

    async componentDidMount() {
        console.log("Mounting....");
        let url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=17e04a031e174e38887e44cd5ee97426&pagesize=15";

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
        });
    }

    onChangeDataOne= async ()=>{
        let url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=popularity&apiKey=17e04a031e174e38887e44cd5ee97426&pagesize=15";

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
        });
    }
    onChangeDataTwo= async ()=>{
        let url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=publishedAt&apiKey=17e04a031e174e38887e44cd5ee97426&pagesize=15";

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
        });
    }

    render() {
        return (

            <div className='row p-0 m-0'>
                <div className='col-12 col-md-11 mx-auto mt-5 mb-5'>
                    <h2 className='text-center'>Tech Crunch</h2>

                    <button className='btn btn-dark px-5 py-2' onClick={this.onChangeDataOne}>Popularity</button>
                    <button className='btn btn-dark px-5 py-2' onClick={this.onChangeDataTwo}>Published At</button>

                    <div className="row mt-2 gy-5">
                        {this.state.articles.map((elements) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4 gy-5" key={elements.url}>
                                    <NewsItems
                                       
                                        title={elements.title}
                                        urlImg={elements.urlToImage}
                                        description={elements.description}
                                        url={elements.url}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    
                </div>
            </div>
        )
    }
}
