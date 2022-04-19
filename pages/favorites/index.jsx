import { Layout } from "../../components/layouts"
import NoFavorites from "../../components/ui/NoFavorites"
import { useState, useEffect } from 'react'
import { localfavorites } from "../../utils"
import FavoritePokemons from "../../components/pokemon/FavoritePokemons"

const FavoritesPage = () => {

    const [ favoritePokemons, setFavoritePokemons ] = useState([])

    useEffect(() => {
        setFavoritePokemons( localfavorites.pokemons() )

    }, [])

    return (
        <Layout title='Pokemons favoritos' >
            {
                favoritePokemons.length === 0 
                    ? ( <NoFavorites /> )
                    : ( <FavoritePokemons pokemons={ favoritePokemons } /> )
            }
        </Layout>
    )
}

export default FavoritesPage