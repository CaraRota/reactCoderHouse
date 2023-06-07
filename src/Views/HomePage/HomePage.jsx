import React from 'react'
import ItemListContainer from '../../components/itemlistcontainer/ItemListContainer'

const HomePage = () => {
    return (
        <main>
            <h2 className='titulo'><ItemListContainer greeting="Bienvenido a la tienda de CaraRota" /></h2>
        </main>
    )
}

export default HomePage