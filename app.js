//importo las variaibles de entorno

import 'dotenv/config'

//importo la clase servidor

import {Servidor} from './Server/Servidor.js'

//crear objeto de la clase servidor

let servidor = new Servidor()

// despertar 

servidor.despertarServidor()





// los servicios son el tipo de operaciones que se realizan en la base de datos. GET POST PUT DELETE. El servicio tiene un tipo .get 