import React, { useState } from 'react';

import axios from 'axios';

import { Button, Checkbox, Input, TextArea, Number, Form } from 'semantic-ui-react'

const ProductCreate = () => {

  const initForm = {
    nombre: "",
    codigo: "",
    descripcion: "",
    precio: "",
    stock: "",
    foto: ""
  }

  const [ oCreate, setOCreate ] = useState(initForm);
  // const [ isHasCreate, setIsHasCreate ] = useState('')

  const handleChange = (oEvnt) => {
    
    const { name, value } = oEvnt.target;

    setOCreate({...oCreate, [name]: value})
    
  }

  const handleSubmit = (oEvnt) => {

    // setIsHasCreate('loading')

    async function myPostSend() {

        let res = await axios.post(`http://localhost:8080/productos//agregar`, oCreate)

        if (res.status === 200) {

          setOCreate(initForm);

        }

    }

    myPostSend();
    // setIsHasCreate('')

  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Field
            control={Input}
            label='Nombre del Producto'
            placeholder='Nombre'
            name="nombre"
            width={5}
            value={oCreate.nombre}
            onChange={handleChange} />
          <Form.Field
            control={Input}
            label='Código del Producto'
            placeholder='Código'
            name="codigo"
            width={4}
            value={oCreate.codigo}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Field
            control={TextArea}
            label='Descripción del Producto'
            placeholder='Descripción'
            name="descripcion"
            width={9}
            value={oCreate.descripcion}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Field
            control={Input}
            type='number'
            label='Precio del Producto'
            placeholder='Precio'
            name="precio"
            value={oCreate.precio}
            width={4}
            onChange={handleChange} />
          <Form.Field
            control={Input}
            type='number'
            label='Cantidad de Productos'
            placeholder='Cantidad de Productos'
            name="stock"
            value={oCreate.stock}
            width={4}
            onChange={handleChange} />            
        </Form.Group>
        <Form.Group>
          <Form.Field
            width={9}>
            <Input label="http://" name='foto' placeholder="Dirección URL Imagen" value={oCreate.foto} onChange={handleChange}/>
          </Form.Field>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default ProductCreate
