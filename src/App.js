import logo from './logo.svg';
import './App.css';
import { Start } from './login';
import {  Route, Routes } from 'react-router-dom';
import {End}  from './Sign';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Start/>}></Route>
    <Route path='/sign' element={<End/>}>
    </Route>
    </Routes>
    </div>
  );
}

export default App;
