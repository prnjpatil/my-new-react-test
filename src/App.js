import './App.css';
import CounterPage from './counter/CounterPage';
import HomePage from './homePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path ='/counterPage' element = {<CounterPage/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
