import './css/App.css'
import React from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Views/HomePage/HomePage'
import ItemListPage from './Views/ItemListPage/ItemListPage'
import ItemPage from './Views/ItemPage/ItemPage'
import ErrorPage from './Views/ErrorPage/ErrorPage'

export default function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/ItemList' element={<ItemListPage />} />
                    <Route path='/Item' element={<ItemPage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route />
                </Routes>

            </Router>
        </>
    )
}