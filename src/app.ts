import express, { Application, Request, Response } from 'express'
import usuarioRouter from './routes/usuarioRoutes'
import cors from 'cors'
import morgan from 'morgan'

class App {
  private readonly app: Application
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  public get express (): Application {
    return this.app
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(cors())
    this.express.use(morgan('dev'))
    // this.express.use(express.static('public'))
  }

  private routes (): void {
    this.app.use('/api/usuarios', usuarioRouter)
    this.app.use(('/'), (_req: Request, res: Response): void => {
      res.send('index')
    })
  }
}

export default App
