import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('usuarios', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
