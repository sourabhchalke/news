import React, { Component,Link } from 'react'

export default class NewsItems extends Component {
    
  render() {

    let {title,description,urlImg,url,author,publishedAt}=this.props;

    return (
        <>
                        <div className="position-relative">
                        <button className='btn btn-danger py-0 position-absolute border-0 top-0 end-0'>{author}</button>
                            <img src={urlImg} className="card-img-top mx-auto"  alt="Image Not Found" />
                            <div className="card-body">
                            {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"/>{author} */}
                            
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p>{publishedAt}</p>
                                <a href={url} target='_blank' className="btn btn-dark">Read More&rarr;</a>
                            </div>
                        </div>
    </>
    )
  }
}
