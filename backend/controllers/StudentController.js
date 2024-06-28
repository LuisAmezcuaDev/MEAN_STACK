import {StudentModel} from "../models/StudentModel.js";

export const getStudents= async (req, res) => {
    //creacion del metodo para traer los datos
    try {
        const students = await StudentModel.find();
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getStudent= async (req, res) => {
    try {
        const {id} = req.params
        const student = await StudentModel.findById(id)
            if (!student) {
                return res.status(404).json(`Estudiante con id ${id} no encontrado`)
            }
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const createStudent = async (req, res) => {
    try {
        const student = await StudentModel.create(req.body)
        res.status(201).json(student)
    } catch (error) {
        res.status(500).json({message: 'Error al crear'})
    }
}

export const updateStudent= async (req, res) => {
    try {
        const {id} = req.params
        const student = await StudentModel.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params
        const student = await StudentModel.findByIdAndDelete(id)
            if (!student) {
                return res.status(404).json(`producto con id ${id} no encontrado`)
            }
        res.status(200).json("alumno eliminado")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
