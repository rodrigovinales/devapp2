## _Clase 7 Entrega_

Se adjunta archivo maquetación en AdobeXD. Llamado `devapp-Clase7`

## Proyecto - _Detalle_
Acorde a lo solicitado en el desafío, se añade fuentes.
Para ello tuve que crear un archivo llamado _react-native.config.js_ la cual hace la exportacion hacia la carpeta contenedora de fuentes descargadas del sitio fonts.google, a elección.

Luego modificar el archivo _package.json_ indicándole un código ya deprecado (o a punto de serlo). Que en definitiva, para eso se agrega el archivo _react-native.config.js_

Se utilizan imagenes locales e imagenes llamadas desde la web, utilizando "uri".
Se arma un archivo denominado _Plantillas.js_ para contener de forma predeterminada colores o fuentes para reutilizar en código.

Hago uso, también, de los estilos contenidos dentro del mismo JS, ademas de utilizar el denominado _Plantillas.js_

No se realiza el mismo ejemplo de la clase, realizo un ejemplo propio, que el usuario tenga que adivinar el numero propuesto por el Random. Dicho numero comprende entre 1 al 10.

Al comenzar, el usuario visualiza en pantalla un mensaje de "INGRESAR", la cual a realizar click en dicho boton, realiza cambio de pantalla (Switch) hacia otra pantalla la cual puede ingresar el numero a adivinar.

Si el usuario ingresa valores fuera de ese rango, aparece un Alert.

Se realizan acciones con los botones LIMPIAR y CONFIRMAR.

En caso de adivinar el numero, regresamos el Alert indicando la cantidad de intentos y una pantalla de Fin del Juego.


