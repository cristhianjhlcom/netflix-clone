# Netflix Home Clone App - ReactJS

Esta app simula la página principal de Netflix, listando una serie de películas que se obtiene de la API de [TMDB](https://www.themoviedb.org/) la idea principal de desarrollar esta aplicación es poner en practica mis conocimientos para desarrollar una UI usando alguna referencia, conectarme a una API utilizando las mejores practicas y mejorar mis habilidades en ReactJS.

[Live Demo](https://netflix-home-clone-reactjs.netlify.app/)

## Características
Las funciones principales que se pueden encontrar en esta App son las siguientes:
- Un banner principal donde se muestra una película al azar, que se consigue generando un número random y haciendo una petición a la API pasando por parámetro este número generado.
- Un apartado de Netflix Originals, aquí se simula las películas creadas por Netflix y se listan en un Row que se puede scrollear horizontalmente. Lo peculiar de esta fila es que es una copia de las filas de abajo, simplemente cree una condición donde pregunta a la aplicación si es una imagen grande lo muestra con este formato, si no, lo muestra con una imagen más pequeña.
- Menú de navegación que se queda fijo en el top de la página cuando hacemos scroll vertical.

## Mejoras
Algunas de las mejoras que tengo pensado aplicar para esta aplicación son la siguiente:
- Al dar clic sobre una película abra una single page o popup con más información detallada sobre la pelicula.
- Consumir otra API tercera para reproducir los traillers de cada película.
- Poder crear una cuenta y sistema de login.
- Que se pueda dar Likes y/o guardar como favoritos

## Tecnologías utilizadas
- React versión: `16.13.1`
- Axios Versión: `0.20.0`
- CSS3

## Screenshots

![Netflix Clone App with ReactJS](https://media.giphy.com/media/MfUKdoe31T8mS5QPbb/giphy.gif)

## Contacto

Puedes ponerte en contacto conmigo a través de mi sitio web [cristhianjhl.com](https://www.cristhianjhl.com) o mi **cristhianjhl@gmail.com**
