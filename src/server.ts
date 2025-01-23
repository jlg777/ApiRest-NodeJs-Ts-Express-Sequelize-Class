import App from './app'

class Server {
  private readonly port: string
  private readonly app: App
  constructor () {
    this.port = process.env.PORT ?? '3000'
    this.app = new App()
  }

  listen (): void {
    this.app.express.listen(this.port, () => {
      console.log('Servidor corriendo en puerto en http://localhost:' + this.port)
    })
  }
}
export default Server
