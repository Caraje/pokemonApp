# Incremental Static regeneration

En ocasiones, podedemos desear que nuestro site tenga  versiones actualizadas de nuestras paginas, para eso necesitamos volver a hacer la generacion de estas paginas, sin embargo, Next tiene suluciones para esto.
ya que Next nos permite hacer esto de forma incremental, es decir, solo actualizar las paginas que necesitamos.

Ademas podemos añadir paginas nuevas que no tengan una version previa, y eliminar paginas que ya no necesitamos.
Para eso vamos a utilizar el incremental static regeneration que nos ofrece Next.

Para hacer que Next revalide o actualice nuestras paginas, en el `getStatiProps` despues de definir las `props`, podemos establecer el `revalidate`, junto un valor en numero que corresponde al tiempo en segundo.
Por ejemplo si establecemos el `revalidate` en 10, le decimos a Next que revalide nuestras paginas cada 10 segundos.

```
export const getStaticProps  = async({ params }) => {
    return {
        props: {
            id: params.id
        },
        revalidate: 10
    }
}

```

---
Mas informacion sobre Incremental static Regeneration => https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

---