import { Request, Response } from 'express'
import Usuario from '../models/usuarioModels'

// Obtener todos los usuarios
export const getUsuarios = async (_req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await Usuario.findAll()
    res.status(200).json(usuarios)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar la base de datos')
      res.status(500).send(error.message)
    }
  }
}

export const getUsuario = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  try {
    const usuario = await Usuario.findByPk(id)
    if (usuario == null) {
      res.status(404).send(`No se encuentra el id ${id}`)
    } else {
      res.status(200).json(usuario)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar la base de datos')
      res.status(500).send(error.message)
    }
  }
}

export const postUsuario = async (req: Request, res: Response): Promise<void> => {
  const body = req.body
  try {
    const usuario = Usuario.build(body)
    await usuario.save()
    res.status(201).json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar la base de datos')
      res.status(500).send(error.message)
    }
  }
}

export const updateUsuario = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const body = req.body
  try {
    const usuario = await Usuario.findByPk(id)
    if (usuario == null) {
      throw new Error('No se ecnuetra usuario')
    } else {
      const updateUser = await usuario.update(body)
      res.status(201).json(updateUser)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar la base de datos')
      res.status(500).send(error.message)
    }
  }
}

export const deleteUsuario = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  try {
    const usuario = await Usuario.findByPk(id)
    if (usuario == null) {
      throw new Error('No se ecnuetra usuario')
    } else {
      const updateUser = await usuario.destroy()
      res.status(200).json(updateUser)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar la base de datos')
      res.status(500).send(error.message)
    }
  }
}
