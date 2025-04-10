import axios from "axios"
import { ICurso } from "../types/ICurso"

export const getCursos=async():Promise<ICurso[]>=>{
    try {
        const response=await axios.get<ICurso[]>('http://localhost:3000/cursos')
        return response.data
    } catch (error) {
        return []
        console.log("Ocurrio un error en la busqueda de cursos",error)
    }
}