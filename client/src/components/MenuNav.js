import React, { Component , useState} from 'react'
import { Dropdown, Menu, Checkbox } from 'semantic-ui-react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

export default class menuNav extends Component {

  state = { activeItem: 'home' , value: '0'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handlecheckClick = (e, { value }) => this.setState({ value: value })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Menu>
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
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Checkbox radio label='File System' name='persistencia' value='0' checked={this.state.value === '0'} onChange={this.handlecheckClick}/> 
            <Checkbox radio  label='MySQL/MariaDB local' name='persistencia' value='1' checked={this.state.value === '1'} onChange={this.handlecheckClick} />            
            <Checkbox radio  label='MySQL/MariaDB DBaas' name='persistencia' value='2' checked={this.state.value === '2'} onChange={this.handlecheckClick} />
            <Checkbox radio  label='SQLite3' name='persistencia' value='3' checked={this.state.value === '3'} onChange={this.handlecheckClick} />
            <Checkbox radio  label='MongoDB Local' name='persistencia' value='4' checked={this.state.value === '4'} onChange={this.handlecheckClick} />
            <Checkbox radio  label='MongoDB DBaas' name='persistencia' value='5' checked={this.state.value === '5'} onChange={this.handlecheckClick} />
            <Checkbox radio  label='Firebase' name='persistencia' value='6' checked={this.state.value === '6'} onChange={this.handlecheckClick} />
          </Menu.Item>
        </Menu.Menu>

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
