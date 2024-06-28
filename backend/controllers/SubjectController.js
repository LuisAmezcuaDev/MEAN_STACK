import { SubjectModel } from "../models/SubjectModel.js";
 

export const getSubjects= async (req, res) => {
    //creacion del metodo para traer los datos
    try {
        const subjects = await SubjectModel.find();
        res.status(200).json(subjects)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getSubject= async (req, res) => {
    try {
        const {id} = req.params
        const subject = await SubjectModel.findById(id)
            if (!subject) {
                return res.status(404).json(`Estudiante con id ${id} no encontrado`)
            }
        res.status(200).json(subject)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const createSubject = async (req, res) => {
    try {
        const subject = await SubjectModel.create(req.body)
        res.status(201).json(subject)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateSubject= async (req, res) => {
    try {
        const {id} = req.params
        const subject = await SubjectModel.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        res.status(200).json(subject)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteSubject = async (req, res) => {
    try {
        const {id} = req.params
        const subject = await SubjectModel.findByIdAndDelete(id)
            if (!subject) {
                return res.status(404).json(`producto con id ${id} no encontrado`)
            }
        res.status(200).json("Materia eliminada")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
