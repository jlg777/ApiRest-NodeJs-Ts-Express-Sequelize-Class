import { Request, Response } from 'express'
import Usuario from '../models/usuarioModels'

// Obtener todos los usuarios
export const getUsuarios = (_req: Request, res: Response): void => {
  try {
    const usuarios = Usuario.findAll()
    res.status(200).json(usuarios)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar la base de datos')
      res.status(500).send(error.message)
    }
  }
}

export const getUsuario = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send('Obtener un solo usuario' + id)
}

export const postUsuario = (req: Request, res: Response): void => {
  const { id } = req.params
  const body = req.body
  console.log(body)
  res.send('Crear un nuevo usuario' + id)
}

export const updateUsuario = (req: Request, res: Response): void => {
  const { id } = req.params
  const body = req.body
  console.log(body)
  res.send('Actualizar usuario' + id)
}

export const deleteUsuario = (req: Request, res: Response): void => {
  const { id } = req.params
  const body = req.body
  console.log(body)
  res.send('Borrar usuario' + id)
}
