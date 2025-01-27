import { Router } from 'express'
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/usuariosControllers'
const usuarioRouter = Router()

usuarioRouter.get('/', getUsuarios)
usuarioRouter.get('/:id', getUsuario)
usuarioRouter.post('/', postUsuario)
usuarioRouter.put('/:id', updateUsuario)
usuarioRouter.delete('/:id', deleteUsuario)

export default usuarioRouter
