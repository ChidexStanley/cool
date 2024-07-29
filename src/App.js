import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
