import { config } from './src/database'

export default config

// De acordo com uma convenção, é necessário criar esse arquivo e trazer o config
// do database pra cá, para o knex reconhecer as configurações do nosso banco.
//Tal medida se da pois ele só entende Javascript, e não Typescript