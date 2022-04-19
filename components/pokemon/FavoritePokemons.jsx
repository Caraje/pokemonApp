import { Grid } from "@nextui-org/react"
import FavoriteCardPokemon from './FavoriteCardPokemon';

const FavoritePokemons = ({ pokemons }) => {

    return (
        <Grid.Container gap={2} direction='row' justify="flex-start" >
            {
                pokemons.map( id => (
                    <FavoriteCardPokemon  pokemonId={ id } key={ id }/>
                ))
            }
        </Grid.Container>
    )
}

export default FavoritePokemons