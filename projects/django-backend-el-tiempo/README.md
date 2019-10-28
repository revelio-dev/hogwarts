# App el tiempo

Con este backend proporcionaremos una API para consultar el tiempo con diferentes proveedores.
Este tutorial ha sido escrito utilizando como base django 2.2.

Links a proyectos:

- Añade aquí el tuyo con una PR


## Tareas

Las siguientes tareas están pensadas para realizar paso a paso, antes de continuar con la siguiente, validaremos la actual.

### 1. Bootstrap

- Crear carpeta donde alojaremos el proyecto
- Crear y activar entorno virtual de python ```python -m .venv venv```
- Instalar django ```pip install django```
- Instalar django en la carpeta actual con ```django-admin startproject miproyecto .```
- Crear fichero requirements.txt y añadir django como requisito
- Lanzar migraciones de django ```./manage.py migrate```
- Arrancar servidor de django y ver el hola mundo ```./manage.py runserver```

### 2. Crear una vista para nuestra API y asignarle una URL

Crear la primera URL/Vista JSON de nuestro backend.

- [Crear vista hola mundo de django](https://docs.djangoproject.com/en/2.2/ref/class-based-views/base/#view)
- Cambiar URL de ejemplo a una URL semántica con lo que vamos a realizar, es decir, la URL de obtención de datos para nuestra API.
En lugar de "mine/" a otro segmento que escojamos. Nuestro front llamara a este endpoint con un GET "mine/".
- Cambiar respuesta HTML de la vista por un JSON [hardcoded](https://es.wikipedia.org/wiki/Hard_code). Si ya tenemos una API funcionando podemos copiar una de sus respuestas JSON y devolverla aquí, así nuestro front seguirá funcionando igual.

### 3. Enganchar el frontend

Si ya teníamos un frontend, llamemos a esta API recién creada para obtener los datos en lugar de un sitio externo.

- Cambiar en nuestro front servicio.com/api/weather por 127.0.0.1:8000/loquesea, deberíamos poder cambiar la URL de producción con una variable de entorno.
- Es posible que tengas que activar CORS en django y dar permiso a nuestro FRONT para que pueda consultar nuestra API. Utilizar librería [django-cors-headers](https://github.com/adamchainz/django-cors-headers)

### 4. Consultar el tiempo desde nuestro backend a otro backend

- Añadir a los settings de django URL / Token de sitio externo para consultar el tiempo. Mejor con variables de entorno.
- Modificar nuestra vista para que acepte [query_params](https://docs.djangoproject.com/en/2.2/ref/request-response/#django.http.HttpRequest.GET)
- Hacer una función o clase que consulta la API de un tercero utilizando la librería [requests](https://requests.kennethreitz.org/en/master/). Si se hace un tests, mejor que mejor. 
- Una vez hecha y probada la función, nuestra vista llamará a esta para obtener el tiempo y devolver la respuesta en formato JSON

### 5. Desplegar y enganchar con nuestro front de producción

- Subir nuestro backend a Heroku o bien a PythonAnywhere
- Una vez subido podemos poner como backend de nuestro front la URL de nuestro backend que acabamos de subir. Es posible que tengas que dar permiso a CORS a esta nueva URL
