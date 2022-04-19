# Incremental Static generation

El incremental Static Generation, lo que hace es crear nuevas paginas que no estaban incluidas cuando hicimos el build de produccion.

O lo que es lo mismo, digamos que tenemos una tienda y disponemos de unos 10 productos, cada cual con su propia pagina, cuando creamos la pagina, creamos esas 10 paginas de productos y las guardamos en una carpeta.

Pero nuestra tienda ha incluido un nuevo producto, y en lugar de tener que cambiar todo el codigo y regenerar todas las paginas, simplemente creamos una nueva pagina y la guardamos en la carpeta, cuando el usuario la solicite y esta se almacenara en el cache junto al resto de paginas que creamos en el build de produccion.


Como logramos hacer esto: 
Podemos hacer lo siguente, en la peticion a la API, podemos hacer un try catch, para que en caso que se solicite una url que no exista, la peticion nos devuielva null.
Lo primero es cambiar el `fallback` del `getStaticPaths` a `'blocking'` para que permita que se pueda incluir una url que no esta en la build inicial.


´´´
try {
        const { data } = await pokeApi.get(`/pokemon/${ nameOrId }`)
        return {
            id: data.id, 
            name: data.name,
            sprites: data.sprites
        }
} catch ( error ) {
    return null
}
´´´

Ahora en nuestro `getStaticProps`, podemos hacer lo siguiente, crear una validacion para ver si nos llega un `null` o si por el contrario, nos llega un objeto con la informacion que necesitamos.
En esta validacion comprobamos que exista la respuesta y que en el caso de que no exista, la web una de dos, o nos devuelva un `404` o nos rediriga a algun sitio que nos interese.

```
    if ( !pokemon ) {
        return {
            redirect: {
                destination: '/', 
                permanent: false
            }
        }
    }
```

---
Mas informacion sobre Incremental static Regeneration => https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

---