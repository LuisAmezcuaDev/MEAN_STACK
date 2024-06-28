import Express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; //importamos la variable para las conexiones
import router from "./routes/routes.js";
const app = Express()

dotenv.config() //para poder realizar configuraciones usando variables de entorno

app.use(Express.json())


//se configura un middleware para que el servidor pueda realizar peticiones a la direccion 4200
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Permitir solicitudes desde este dominio
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeceras permitidas
    next();
  });

app.use('/api/', router) //definimos la ruta para los endpoints

app.get("/", (req, res) => {
    res.send('Hola mundo')
})
//para podeer utilizar el puerto que tenemos definido en la variable de entorno 
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const start = async() => {
    try {
        await connectDB(MONGO_URI)
        console.log('MongoDB conected')
        app.listen(PORT, () => {
        console.log(`server running: http://localhost:${PORT}`);    
        })
        
    } catch (error) {
        console.log(error)
    }
}
start()
