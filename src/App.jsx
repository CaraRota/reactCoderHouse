import './css/App.css'
import React from 'react'
import NavBar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Views/HomePage/HomePage'
import ItemPage from './Views/ItemPage/ItemPage'
import ErrorPage from './components/Error/ErrorPage'
import CategoryPage from './Views/CategoryPage/CategoryPage'
import CartPage from './Views/CartPage/CartPage'
import { CartProvider } from './Context/CartContext'

const App = () => {
    return (
        <>
            <Router>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/Item/:id' element={<ItemPage />} />
                        <Route path='/Category/:category' element={<CategoryPage />} />
                        <Route path='/Cart' element={<CartPage />} />
                        <Route path="*" element={<ErrorPage />} />
                        <Route />
                    </Routes>
                </CartProvider>
            </Router>
        </>
    )
}
export default App