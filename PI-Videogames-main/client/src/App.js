import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing.jsx';
import Home from './views/Home.jsx';
import Detail from './views/Detail.jsx';
import Form from './views/Form.jsx';
import Nav from './views/Nav.jsx';


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

export {App};
