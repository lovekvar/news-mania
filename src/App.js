import './App.css';
import Navbar from './components/navbar';
import NewsBox from './components/newsBox';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<NewsBox category="general"/>} />
                <Route path="/business" element={<NewsBox category="business"/>} />
                <Route path="/entertainment" element={<NewsBox category="entertainment"/>} />
                <Route path="/health" element={<NewsBox category="health"/>} />
                <Route path="/technology" element={<NewsBox category="technology"/>} />
                <Route path="/sports" element={<NewsBox category="sports"/>} />
                <Route path="/science" element={<NewsBox category="science"/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
