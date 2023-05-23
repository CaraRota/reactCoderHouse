import './css/App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

export default function App() {
    return (
        <>
            <NavBar />
            <main>
                <h2 className='titulo'><ItemListContainer greeting="Bienvenido a la tienda de CaraRota" /></h2>
            </main>
        </>
    )
}