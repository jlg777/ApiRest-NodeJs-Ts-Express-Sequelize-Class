import Server from './server'

const server = new Server()

async function startServer (): Promise<void> {
  await server.listen() // Esperamos que la promesa de listen se resuelva
}

startServer().catch((error) => {
  console.error('Error al iniciar el servidor:', error)
})
