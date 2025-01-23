import express, { Application } from 'express'

class App {
  private readonly app: Application
  private readonly port: string
  constructor () {
    this.app = express()
    this.port = process.env.PORT ?? '3000'
  }

  listen (): void {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto en http://localhost:' + this.port)
    })
  }
}
export default App
