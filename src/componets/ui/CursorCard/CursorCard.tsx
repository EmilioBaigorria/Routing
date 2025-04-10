import { FC } from 'react'
import { Card } from 'react-bootstrap'
import { ICurso } from '../../../types/ICurso'
import { NavLink } from 'react-router'
interface ICursosCard{
  curso:ICurso
}
export const CursorCard:FC<ICursosCard> = ({curso}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{curso.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Cabtidad de estudiantes: {curso.estudiantes.length}</Card.Subtitle>
        <NavLink to={`/estudiantes/${curso.id}`}>Estudiantes</NavLink>
      </Card.Body>
    </Card>
  )
}
