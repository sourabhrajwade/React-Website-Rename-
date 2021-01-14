
import './App.css';
import Navabr from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Navabr/>
    </Router>
  );
}

export default App;
