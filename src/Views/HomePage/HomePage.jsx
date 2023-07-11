import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import SearchBar from '../../components/SearchBar/SearchBar'

const HomePage = () => {
    return (
        <main>
            <SearchBar />
            <h2 className='titulo'><ItemListContainer /></h2>
        </main>
    )
}

export default HomePage