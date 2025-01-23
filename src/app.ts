import express, { Application } from 'express'

class App {
  private readonly app: Application
  constructor () {
    this.app = express()
  }

  public get express (): Application {
    return this.app
  }
}
export default App
