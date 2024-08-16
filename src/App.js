
import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

class App extends Component {

  state={
    progress : 0,
  }
 
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <LoadingBar
          height={3.5}
          color='#f11946'
          
          progress={this.state.progress}
        />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' key="/publishedAt" element={<News setProgress={this.setProgress} pageSize={15} sortBy="publishedAt" />} />
            <Route path='/popularity' key="popularity" element={<News setProgress={this.setProgress} pageSize={15} sortBy="popularity" />} />
          </Routes>
        </BrowserRouter>

      </>
    );
  }
}

export default App;
