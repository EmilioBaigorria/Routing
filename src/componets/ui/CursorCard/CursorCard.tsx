import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import { ICurso } from '../../../types/ICurso'
interface ICursosCard{
  curso:ICurso
}
export const CursorCard:FC<ICursosCard> = ({curso}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{curso.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Cabtidad de estudiantes {}</Card.Subtitle>
        <Card.Link href="#">Estudiantes</Card.Link>
      </Card.Body>
    </Card>
  )
}
