import './App.css';
import { Routes, Route } from "react-router-dom"
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Artist from './components/Artist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Sidenav />}>
          <Route index element={<Home />} />
          <Route path='/artist' element={<Artist/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
