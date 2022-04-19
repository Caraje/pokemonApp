# GetStaticProps

Se usa para hacer la peticion de la informacion de toda la informacion de nuestra pagina pero en el momento de la construccion de la misma.
Por lo tanto, general el contenido de todo posible para que se almacene de manera estatica y podamos subirlo a nuestro servidor, evitando asi que el usuario de nuestra web, tenga que hacer nuevas peticiones a otro lugar, haciendo que sea mas lento el tiempo de carga de nuestra aplicacion.

El getstaticProps, se utiliza unicamente las `pages` por lo que no puedes ser usado en componentes y otros archivos de nuestro codigo.

Usaremos el siguiente codigo para poder usarlo en nuestra `page`

```
    export const getStaticProps = async (ctx) => {    
        return {
            props: {
            }
        }
    }
```


Este codigo se ejecuta del lado del servidor y no del cliente, por lo que podemos hacer uso para hacer peticiones e incluso hacer uso de tokens y similares ya que esta informacion no sera accesible para el usuario.

Las props del return, son enviadas a las props de la funcion de la page, donde tenemos el codigo de nuestra pagina.


### Cuando usar getStaticProps.

Deberiamos usar `getStaticProps` en los siguientes casos: 

    - Si los datos necesarios para representar en la pagina estan disponibles EN EL MOMENTO de la compilacion, antes de de la solicitud del usuario.
    - Los datos vienen de un CMS descabezado.
    - Los datos pueden ser alamcenados en cache publico ( no especificamente del ususario)
    - La pagina debe estar renderizada ( por razones de SEO ) y ser muy rapida.

getStaticProps, lo que hace es generar archivos HTML y JSON.
