import mongoose from 'mongoose'

//creacion de un schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lastname: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    no_ctrl: {
        type: Number,
        required: [true, 'El número de control es obligatorio']
    },
    semestre: {
        type: Number,
        required: [true, 'El semestre es obligatorio']
    }
},

{
    timestamps: true,
    versionKey: false
});

//creacion de un modelo a partir de nuestro esquema

export const StudentModel = mongoose.model('Student', studentSchema);

// const studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'complete este campo']
//     },
//     subject: {
//         type: String,
//         required: [true, 'complete este campo']
//     }
// },
// {
//     timestamps:true,
//     versionKey:false
// }

// );