import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('usuarios_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
