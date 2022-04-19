import React, { useState,useEffect } from 'react';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

import confetti from 'canvas-confetti'


import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { getPokemonInfo, localfavorites } from '../../utils'

// DEFINIR LA PAGE
const PokemonByNamePage = ({ pokemon }) => {
    const router = useRouter()
    const [isInFavorites, setIsInFavorites] = useState( )
    useEffect(() => {
        setIsInFavorites( localfavorites.existInFavorites( pokemon.id ) )
    }, [ pokemon.id ])
    
    const onToggleFavorite = () => {
        localfavorites.toggleFavorite( pokemon.id )
        setIsInFavorites( !isInFavorites ) 

        if ( !isInFavorites) {
            confetti({
                zIndex: 10,
                particleCount: 200,
                spread: 160,
                angle: -100,
                origin: { x:0.9, y: 0.15 }
            });
        }
    }

    return (

        <Layout title={ pokemon.name }>
            <Grid.Container css={{ marginTop:'5px' }} gap={2} >
                <Grid xs={12} sm={ 4 } >
                    <Card hoverable css={{ padding:'30px' }}>
                        <Card.Body>
                            <Card.Image 
                                src= { pokemon.sprites.other?.dream_world.front_default || '/no-image.png '}
                                alt={ PokemonByNamePage.name }
                                width= '100%'
                                height={ 200 }
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={ 12 } sm= { 8 }>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Text h1 transform='capitalize'>
                                { pokemon.name}
                            </Text>
                            <Button
                                color='gradient'
                                ghost={ !isInFavorites }
                                onClick={ onToggleFavorite }
                            >
                                { isInFavorites ? 'En favoritos' : 'Guardar en favoritos' }
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={ 30 }>Sprites: </Text>
                            <Container direction='row' display='flex' gap={ 0 }>
                                <Image
                                    src={ pokemon.sprites.front_default }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image
                                    src={ pokemon.sprites.back_default }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image
                                    src={ pokemon.sprites.front_shiny }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image
                                    src={ pokemon.sprites.back_shiny }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </Container>
                        </Card.Body>
                    </Card>

                </Grid>
            </Grid.Container>
        </Layout>
    )
}

// DEFINIR EL getStaticPath
export const getStaticPaths = async (ctx) => {   

    const { data } = await pokeApi.get('pokemon?limit=151')
    const pokemonNames = data.results.map( pokemon => pokemon.name )
    return {
        paths: pokemonNames.map( name => ({
            params: { name }
        })), 
        fallback: 'blocking'
    }
}

// DEFINIR EL getStaticProps
export const getStaticProps = async ({ params }) => {
    const { name } = params 
    const pokemon = await getPokemonInfo( name.toLowerCase() )
    if( !pokemon ){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400
    }
}


// EXPORTACIONES
export default PokemonByNamePage