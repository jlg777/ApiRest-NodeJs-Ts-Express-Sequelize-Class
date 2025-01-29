import App from './app'
import dotenv from 'dotenv'
import sequelize from './db/database'
// import sequelize from './db/database'

dotenv.config()

class Server {
  private readonly port: string
  private readonly app: App
  constructor () {
    this.port = process.env.PORT ?? '3001'
    console.log('Puerto configurado:', this.port)
    this.app = new App()
    void this.dbconecction()
  }

  public async dbconecction (): Promise<void> {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  public async listen (): Promise<void> {
    try {
      this.app.express.listen(this.port, () => {
        console.log(`Servidor corriendo en http://localhost:${this.port}`)
      })
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error)
    }
  }
}
export default Server
