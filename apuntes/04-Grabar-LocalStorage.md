

# Grabar en el local Storage

Cuando generamos el codigo statico de nuestra aplicacion, debemos tener en cuenta que para grabar en el LocalStorage, no es tan simple como hacer un `LocalStorage.setItem()` ya que con next, son dos cosas difetentes el lado del servidor y el lado del cliente y cuiando generamos nuestra aplicacion  de manera estatica, solo dispondremos de la informacion en el lado del servidor, por lo que no contamos con `localStorage` ya que estamos haciendo uso de `node.js`
Por lo que cuando deseamos leer el contenido del `localstorage` este nos lanza un error, por que simplemente no exise o mejor dicho, no tiene acceso a el.

Una manera de poder recuperar los datos del `localStorage` es devolver un false para que no reviente la aplicacion y asi luego cargarla cuando se tenga acceso a esta.

```
    if( typeof window === 'undefined')  return false
```

Con esto le decimos que si detecta que el objeto `window` es undefined, retorne un false y luego ya podremos gestionar el codigo del `localStorage`



## IMPORTANTE!!

---
Es importante aprender cuando se generan cosas en el lado del servidor y en el lado del cliente ya que puede dar pie a generacion de elementos diferentes y por lo tanto a errores.
---