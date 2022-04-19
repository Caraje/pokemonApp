# getStaticPaths

Lo usamos para poder generar paginas en base a una url dinamica.
En nuestro ejercicio de pokemons, hemos creado un archivo base para una pagina que mostrara un pokemon segun su `id`, que tomara como base a la hora de generar las 151 que se dispondran finalmente.

Sin embargo si tratamos de extraer informacion de las props de un `getStaticProps`, la aplicacion va a reventar, ya que no es capaz de hacerlo, para poder sacar estas props, necesitamos hacer uso del `getStatiPaths`

Para poder usarlo deberemos hacerlo con el siguiente codigo en la base de referencia de nuestra pagina ( en caso del ejercicio del curso `[id].jsx`)

```
    export const getStaticPaths = async (ctx) => {
        return {
            paths: [
                {
                    params: {
                        id: '1'
                    }
                }
            ],
            fallback: false
        }
    }
```

dentro del paths, debemos establecer los params, que vamos a poder extraer y usar, por ejemplo, queremos usar, el `id`
pues debemos generarlos tantas veces como paginas deberemos renderizar ( en el caso del ejercicio 151 veces).

El `fallback` por defecto al usar el snippet, se establece en `"blocking"` al estar de este modo, le decimos que puede generar las paginas, en caso de no estar definida en el `params`, pero al establecerlo como `false` cuando llamemos una url que no sea establecida, nos devolvera una pagina 404 de error.


## Como hacer un getStaticPaths con multiples params y multiples paginas.

Cuando creamos el getStaticPaths, podemos establecer codigo Javascript como si fuera un componente o una funcion, por que de echo, es una funcion.

Entonces podemos idear el modo para crear un arreglo que contenga los espacios necesarios.

Por ejemplo con el siguiente codigo 
```
    const nombreArreglo = [...Array(151)].map( ( value, index ) => `${ index + 1 }` )

```

Eso nos da un array llamado nombreArreglo, que contiene 151 espacios, y cada espacio contiene un numero, que es el index + 1, por ejemplo, el primer espacio contiene el numero 1, el segundo el numero 2, etc.

A la hora de definir los paths, podemos pasarle un `.map()` de nuestro arreglo, y en cada espacio, le pasamos un objeto con el parametro `params` y el valor de nuestro id


```
export const getStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` )

    return {
        paths: pokemon151.map(id => ({
            params: {id}
        })), 
        fallback: false
    }
}
```

Despues de definir los `getStaticPaths` estos pasan directamente a los parametros de `getStaticProps` para que podamos usarlos en la pagina.

l