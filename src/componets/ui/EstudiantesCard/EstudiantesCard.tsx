import { FC } from 'react'
import { Card } from 'react-bootstrap'
import { IEstudiante } from '../../../types/IEstudiante'

interface IEstudiantesCard{
  estudiante:IEstudiante
}
export const EstudiantesCard:FC<IEstudiantesCard> = ({estudiante}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{estudiante.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          ID:{estudiante.id}
          Edad:{estudiante.edad}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}
