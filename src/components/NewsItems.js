import React, { Component } from 'react'

export default class NewsItems extends Component {

    

  render() {
    return (
        <>
        <div className='row m-0'>
            <div className='col-12 mx-auto'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className="card border border-0">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
