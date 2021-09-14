import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardCardProps = ({producto}) => (
  <Card
    // image={producto.foto}
    // header={producto.nombre}
    // meta={producto.codigo}
    // description={producto.descripcion}
    // extra={producto.precio}
  />
)

export default CardCardProps