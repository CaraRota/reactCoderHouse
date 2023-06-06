import './css/App.css'
import React from 'react'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Views/HomePage/HomePage'
import ItemListPage from './Views/ItemListPage/ItemListPage'
import ItemPage from './Views/ItemPage/ItemPage'
import ErrorPage from './Views/ErrorPage/ErrorPage'
import CategoryPage from './Views/CategoryPage/CategoryPage'

export default function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/ItemList' element={<ItemListPage />} />
                    <Route path='/Item/:id' element={<ItemPage />} />
                    <Route path='/Category/:categoryId' element={<CategoryPage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route />
                </Routes>
            </Router>
        </>
    )
}