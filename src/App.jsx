import './css/App.css'
import React from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer"

export default function App() {
    return (
        <>
            <NavBar />
            <ItemDetailContainer />
            <main>
                <h2 className='titulo'><ItemListContainer greeting="Bienvenido a la tienda de CaraRota" /></h2>
            </main>
        </>
    )
}