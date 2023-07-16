import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing';
import Home from './views/Home';
import Detail from './views/Detail';
import Form from './views/Form';
import Nav from './views/Nav';
const URL="http://localhost:3001"

function App() {
  const {pathname}= useLocation()
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <div>{pathname !== "/" && <Nav/>}</div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export {App, URL};
