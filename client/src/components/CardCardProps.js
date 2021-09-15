import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const CardCardProps = ({ producto }) => (

  // <Link to={`/detail/${producto.id}`}>
  <Card>
    <Image wrapped ui={false}
      src={producto.foto} />
    <Card.Content>

      <Card.Header>{producto.nombre}</Card.Header>
      <Card.Meta>{producto.codigo}</Card.Meta>
      <Card.Description>{producto.descripcion}</Card.Description>

    </Card.Content>
    <Card.Content extra>
      <div>
        <Button icon as={Link} to={`/detail/${producto.id}`}>
          <Icon name='unhide' />
          Detalle
        </Button>
      </div>
    </Card.Content>
  </Card>


)

export default CardCardProps