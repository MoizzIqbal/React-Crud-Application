import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
