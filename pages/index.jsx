import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';


const HomePage = ( {pokemons} ) => {
  
  return (
    <Layout title={'Listado de Pokemons'}>
      <Grid.Container gap={ 1 } justify='flex-start'>
        {
          pokemons.map(( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon= { pokemon }/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export default HomePage


export const getStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get('/pokemon?limit=151')


  const pokemons = data.results.map( (poke, i) => ({
    ...poke, 
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1 }.svg`

  }) )

  return {
    props: {
      pokemons
    }
  }
}