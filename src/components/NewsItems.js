import React, { Component,Link } from 'react'

export default class NewsItems extends Component {
    
  render() {

    let {title,description,urlImg,url}=this.props;

    return (
        <>
                        <div className="">
                            <img src={urlImg} className="card-img-top mx-auto"  alt="Image Not Found" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <a href={url} target='_blank' className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
    </>
    )
  }
}
