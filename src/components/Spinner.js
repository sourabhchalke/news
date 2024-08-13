import React, { Component } from 'react'
import loading from '../img/grey-9026.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center mt-4'>
        <img src={loading} alt='loading...' style={{width:"35px"}} />
      </div>
    )
  }
}
