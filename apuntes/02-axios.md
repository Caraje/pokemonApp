# Usar Axios

Se usa para hacer peticiones, es como el Fetch, sirve para lo mismo pero con sus ventajas y desventajas.

Para usarlo primero necesitamos instalarlo con `yarn axios` o `npm axios`

definimos una variable a la que le damos el valor de `axios.create` dentro de los parametros del create, podemos definor la baseURL, que contiene la base de la url a donde haremos la peticion


Ahora para usarla creamos una nueva variable para almacenar la respuesta, y le damos el valor de un await usando el `nombreDefinido` seguido de `.get()` en cuyos parametros le pasamos el endpoint de la url a la que hacemos la peticion


```
    const pokeApi = axios.create({
        baseURL: htpps://url.com/api/v2
    })

    const resp = await pokeApi.get('/pokemon?limit=151)


```