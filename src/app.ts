import express, { Application } from 'express'

class App {
  private readonly app: Application
  constructor () {
    this.app = express()
    this.middlewares()
  }

  public get express (): Application {
    return this.app
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }
}
export default App
