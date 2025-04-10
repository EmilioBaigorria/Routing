import { useEffect, useState } from 'react'
import { getAlumnos } from '../../http/api'
import { CursorCard } from '../ui/CursorCard/CursorCard'

export const CursosScreen = () => {

  const [cursos,setCursos]=useState([])

  const getalm=async()=>{
    const alumnos=await getAlumnos()
    setCursos(alumnos)
  }
  useEffect(()=>{
    getalm()
  },
  [])

  return (
    <div>
      {cursos.map((el)=>(
        <CursorCard curso={el}/>
      ))}
    </div>
  )
}
