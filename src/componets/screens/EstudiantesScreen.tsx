
import { NavLink, useParams } from 'react-router'
import { getCursos } from '../../http/api'
import { useEffect, useState } from 'react'
import { IEstudiante } from '../../types/IEstudiante'
import { EstudiantesCard } from '../ui/EstudiantesCard/EstudiantesCard'
import styles from "./EstudiantesScreen.module.css"
import { Button } from 'react-bootstrap'


export const EstudiantesScrean = () => {
  const [alumnos,setAlumnos]=useState<IEstudiante[]>([])
  let cursoId=useParams()
  const getAlumnos=async()=>{
    const cursos=await getCursos()
    cursos.forEach(el => {
      if(el.id==Number(cursoId.ID)){
        setAlumnos(el.estudiantes)
      }
    });
  }
  useEffect(()=>{
    getAlumnos()
  },[])

  return (
    <div className={styles.estudiantesMainContainer}>
      <div className={styles.estudiantesListContainer}>
      {alumnos.map((el)=>(
          <EstudiantesCard key= {el.id}estudiante={el}/>
        
      ))}
      </div>
      <Button variant="outline-warning">
      <NavLink to="/">
        Volver
      </NavLink>
      </Button>
    </div>
  )
}
