import axios from 'axios';

// URL base para hacer las peticiones a la base de datos
// crea una URL base y luego la une con los parametros dinamicamente
// ejemplo https://google.com/hola-a-todos
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;