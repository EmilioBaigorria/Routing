import { useEffect, useState } from 'react'
import { getCursos } from '../../http/api'
import { CursorCard } from '../ui/CursorCard/CursorCard'
import { ICurso } from '../../types/ICurso'
import styles from "./CursosScreen.module.css"

export const CursosScreen = () => {

  const [cursos,setCursos]=useState<ICurso[]>([])

  const getCurs=async()=>{
    const cursos=await getCursos()
    setCursos(cursos)
  }
  useEffect(()=>{
    getCurs()
  },
  [])

  return (
    <div className={styles.mainCursosContainer}>
      <p>Cursos</p>
      <div className={styles.cursosListContainer}>
      {cursos.map((el)=>(
        <CursorCard key={el.id} curso={el}/>
      ))}
      </div>
    </div>
  )
}
