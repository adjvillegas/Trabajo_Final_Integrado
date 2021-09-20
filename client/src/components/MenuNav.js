import React, { Component } from 'react'
import { Dropdown, Menu, Checkbox } from 'semantic-ui-react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

export default class menuNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='Inicio'
          active={activeItem === 'Inicio'}
          onClick={this.handleItemClick}
          as={Link}
          to='/Inicio'
        />
        <Menu.Item
          name='Articulos'
          active={activeItem === 'Articulos'}
          onClick={this.handleItemClick}
          as={Link}
          to='/articulos'
        />
        <Dropdown item text='Administrador'>
          <Dropdown.Menu>
            <Dropdown.Item
                      name='Crear'
                      active={activeItem === 'Crear'}
                      onClick={this.handleItemClick}
                      as={Link}
                      to='/productCreate'>Crear Producto</Dropdown.Item>
            <Dropdown.Item
                      name='Mantener'
                      active={activeItem === 'Mantener'}
                      onClick={this.handleItemClick}
                      as={Link}
                      to='/Maintenance'>Mantenimiento de Producto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position='right'>
          <Menu.Item
            name='Carrito'
            active={activeItem === 'Carrito'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Checkbox label='Soy Un Admin' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}



// const menuNav = () => <Menu items={items} />

// export default menuNav
