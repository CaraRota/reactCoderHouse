import './css/App.css'
import React from 'react'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Views/HomePage/HomePage'
import ItemPage from './Views/ItemPage/ItemPage'
import ErrorPage from './Views/ErrorPage/ErrorPage'
import CategoryPage from './Views/CategoryPage/CategoryPage'

const App = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/Item/:id' element={<ItemPage />} />
                    <Route path='/Category/:category' element={<CategoryPage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route />
                </Routes>
            </Router>
        </>
    )
}
export default App