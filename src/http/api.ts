import axios from "axios"

export const getAlumnos=async()=>{
    try {
        const response=await axios.get('http://localhost:3000/cursos')
        return response.data
    } catch (error) {
        console.log("Ocurrio un error añadiendo las tareas",error)
    }
}