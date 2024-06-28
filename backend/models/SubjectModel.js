import mongoose from 'mongoose'
import { StudentModel } from './StudentModel.js';

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la materia es obligatorio']
    },
    unidades: {
        type: Number,
        required: [true, 'Las unidades son necesarias']
    },
    inscritos: {
        type: Number,
        required: [true, 'Es necesario']
    }
    // alumno: {
    //     type: String // Campo para almacenar el nombre del estudiante
    // },
    // alumnoId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Student' // Nombre del modelo al que hace referencia (StudentModel)
    // }
});

subjectSchema.pre('save', async function(next) {
    // Antes de guardar la materia, obtener el nombre del estudiante y almacenarlo en 'alumno'
    if (this.alumnoId) {
        try {
            const student = await StudentModel.findById(this.alumnoId);
            if (student) {
                this.alumno = student.name; // Almacenar el nombre del estudiante en 'alumno'
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    next();
});

export const SubjectModel = mongoose.model('Subject', subjectSchema);
