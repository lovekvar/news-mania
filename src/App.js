import './App.css';
import Navbar from './components/navbar';
import NewsBox from './components/newsBox';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [country, setCountry] = useState('all');
  const handleCountry = (element)=>{
    // console.log(element.target.value);
    setCountry(element.target.value);
  };
  const apiKey = process.env.REACT_APP_NEWS_MANIA_API_KEY;
  // these env variables name must start with 'REACT_APP'

  return (
    <BrowserRouter>
      <Navbar func={handleCountry}></Navbar>
      <Routes>
        <Route path="/" element={<NewsBox apiKey={apiKey} category="general" country={country}/>} />
        <Route path="/general" element={<NewsBox apiKey={apiKey} category="general" country={country}/>} />
        <Route path="/business" element={<NewsBox apiKey={apiKey} category="business" country={country}/>} />
        <Route path="/entertainment" element={<NewsBox apiKey={apiKey} category="entertainment" country={country}/>} />
        <Route path="/health" element={<NewsBox apiKey={apiKey} category="health" country={country}/>} />
        <Route path="/technology" element={<NewsBox apiKey={apiKey} category="technology" country={country}/>} />
        <Route path="/sports" element={<NewsBox apiKey={apiKey} category="sports" country={country}/>} />
        <Route path="/science" element={<NewsBox apiKey={apiKey} category="science" country={country}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
