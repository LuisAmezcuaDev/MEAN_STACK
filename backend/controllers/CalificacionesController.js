import {CalificacionesModel} from '../models/CalificacionesModel.js'

export const getCalis= async (req, res) => {
    //creacion del metodo para traer los datos
    try {
        const calis = await CalificacionesModel.find();
        res.status(200).json(calis)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getCali= async (req, res) => {
    try {
        const {id} = req.params
        const cali = await CalificacionesModel.findById(id)
            if (!cali) {
                return res.status(404).json(`Estudiante con id ${id} no encontrado`)
            }
        res.status(200).json(cali)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const createCali = async (req, res) => {
    try {
        const cali = await CalificacionesModel.create(req.body)
        res.status(201).json(cali)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateCali= async (req, res) => {
    try {
        const {id} = req.params
        const cali = await CalificacionesModel.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        res.status(200).json(cali)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteCali = async (req, res) => {
    try {
        const {id} = req.params
        const cali = await CalificacionesModel.findByIdAndDelete(id)
            if (!cali) {
                return res.status(404).json(`producto con id ${id} no encontrado`)
            }
        res.status(200).json("alumno eliminado")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
