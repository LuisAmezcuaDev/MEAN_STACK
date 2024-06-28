import express from 'express'
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from '../controllers/StudentController.js'
import { createSubject, deleteSubject, getSubject, getSubjects, updateSubject } from '../controllers/SubjectController.js'
import { createCali, deleteCali, getCali, getCalis, updateCali } from '../controllers/CalificacionesController.js'

const router = express.Router()

router.get('/students',getStudents)
router.get('/students/:id',getStudent)
router.put('/students/:id', updateStudent)
router.post('/students', createStudent)
router.delete('/students/:id', deleteStudent)

router.get('/subjects/:id',getSubject)
router.get('/subjects',getSubjects)
router.put('/subjects/:id', updateSubject)
router.post('/subjects', createSubject)
router.delete('/subjects/:id', deleteSubject)

router.get('/cali/:id',getCali)
router.get('/cali',getCalis)
router.put('/cali/:id', updateCali)
router.post('/cali', createCali)
router.delete('/cali/:id', deleteCali)

export default router