
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path='/publishedAt' key="/publishedAt" element={ <News pageSize={15} sortBy="publishedAt" />} />
            <Route path='/popularity' key="popularity" element={<News pageSize={15} sortBy="popularity" />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
