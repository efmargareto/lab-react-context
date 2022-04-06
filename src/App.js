import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { Navbar } from './components/NavBar/Navbar';
import { Detail } from './views/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
