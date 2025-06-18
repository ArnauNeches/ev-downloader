# EV downloader:

Extensión para chrome que permite descargar ficheros en la plataforma enseñanza virtual de la Universidad de Sevilla a los que los profesores le han deshabilitado la opción de descarga.

- **Funcionamiento**: 
    1. Accede a la página donde esté el fichero que quieras descargar.
    2. Pulsa el icono de la extensión.
    3. Pulsa en el botón que pone: "Descargar Fichero".
    4. Se te descargará y abrirá automaticamente el fichero que no podías descargar.

- **Método de descarga e instalación sencillo**: 
    1. Descarga este repositorio, descomprimelo y guardalo en un lugar seguro.
    2. Accede a chrome://extensions/ (o en su defecto: Configuracion->Extensiones)
    3. Activa el modo desarrollador arriba a la derecha.
    4. Pulsa en el botón carga descomprimida y selecciona la carpeta que acabas de descomprimir.

- **Funcionamiento interno**: En primer lugar, mi compañero Rafael José Repetto se dio cuenta de que una forma de descargar los ficheros sería cambiando el atributo src de la etiqueta iframe que contiene el fichero deseado (El cambio es eliminar todos los parámetros de la url salvo ?xythos-download=true). Tras esto, aprendí como hacer una extensión de chrome sencilla y la hice. En el html solo hay un botón con un event listener que al presionarlo ejecuta una función. La función en primer lugar carga la pestaña en la que estamos e inyecta el script que cambia el src en nuestra pestaña.

- **Pull Request**: Estoy completamente abierto a mejoras y cambios. Sientete libre de hacer un PR y si lo veo bien lo aceptaré. Esto también puede servir para futuras actualizaciones de ev que inhabiliten esta extensión.

- **Autor**: Arnau Neches Vilà