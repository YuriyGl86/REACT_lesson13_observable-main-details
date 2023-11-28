import React from 'react';
import './App.css';
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DetailViewPage } from './pages/DetailViewPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/>}>
        <Route index element={ <HomePage/>} />
        <Route path="/:id" element={ <DetailViewPage/>} />
      </Route>
    </Routes>
  );
}

export default App;