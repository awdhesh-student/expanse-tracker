import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddExpanse from './pages/add-expanse/AddExpanse'
import Footer from './components/footer/Footer'
function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/add-expanse" element={<AddExpanse />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
