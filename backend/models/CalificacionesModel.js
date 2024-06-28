import mongoose from 'mongoose'
import { StudentModel } from './StudentModel.js';

const qualificationSchema = new mongoose.Schema({
    alumno: {
        type: String // Campo para almacenar el nombre del estudiante
    },
    alumnoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' // Nombre del modelo al que hace referencia (StudentModel)
    },
    materia: {
        type: String
    },
    materiaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }, 
    unidad: {
        type: Number,
        required: [true, 'La unidad es obligatoria']
    },
    calificacion: {
        type: Number,
    }
});

export const CalificacionesModel = mongoose.model('Qualification', qualificationSchema);