/* eslint-disable eqeqeq */
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink}  from 'react-router-dom';
import DriftPage from './Menu/DriftPage';
import ForzaPage from './Menu/ForzaPage';
import HomePage from './Menu/HomePage';
import TimeAttackPage from './Menu/TimeAttackPage';
import './Menu/menu.css';

function App() {

  return (
    <Router>
      <div>
        <nav className="menu">
          <NavLink className={`menu__item`} to="/" >Главная</NavLink>
          <NavLink className={`menu__item`} to="/drift" >Дрифт-такси</NavLink>
          <NavLink className={`menu__item`} to="/timeattack" >Time Attack</NavLink>
          <NavLink className={`menu__item`} to="/forza" >Forza Karting</ NavLink>
        </nav>
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/drift" exact element={<DriftPage/>} />
            <Route path="/timeattack" exact element={<TimeAttackPage/>} />
            <Route path="/forza" exact element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;