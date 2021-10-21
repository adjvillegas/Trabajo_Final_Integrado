import React, { useEffect, useState} from 'react'
import { Dropdown, Menu, Checkbox } from 'semantic-ui-react'

//LINK ROUTER DOM
import { Link } from 'react-router-dom';
import { useCartContext } from '../providers/CartContext';


const MenuNav = () => {


  const { currentDB, changeCurrentDB } = useCartContext()

  const [activeItem, setActiveItem] = useState('home')
  const [valueItem, setValueItem] = useState('')  

  const handleItemClick = (e, { name }) => setActiveItem(name)
  const handlecheckClick = (e, { value }) => { 
    setValueItem(value);
    changeCurrentDB(value);
  }

  useEffect(() => {
    setValueItem(currentDB)
}, [currentDB]);

    return (
      <Menu secondary>
        <Menu.Menu>
        <Menu.Item
          name='Inicio'
          active={activeItem === 'Inicio'}
          onClick={handleItemClick}
          as={Link}
          to='/Inicio'
        />
        <Menu.Item
          name='Articulos'
          active={activeItem === 'Articulos'}
          onClick={handleItemClick}
          as={Link}
          to='/articulos'
        />        
        <Dropdown item text='Administrador'>
          <Dropdown.Menu>
            <Dropdown.Item
                      name='Crear'
                      active={activeItem === 'Crear'}
                      onClick={handleItemClick}
                      as={Link}
                      to='/productCreate'>Crear Producto</Dropdown.Item>
            <Dropdown.Item
                      name='Mantener'
                      active={activeItem === 'Mantener'}
                      onClick={handleItemClick}
                      as={Link}
                      to='/Maintenance'>Mantenimiento de Producto</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>        
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Checkbox radio label='File System' name='persistencia' value='0' checked={valueItem === '0'} onChange={handlecheckClick}/> 
            <Checkbox radio  label='MySQL/MariaDB local' name='persistencia' value='1' checked={valueItem === '1'} onChange={handlecheckClick} />            
            <Checkbox radio  label='MySQL/MariaDB DBaas' name='persistencia' value='2' checked={valueItem === '2'} onChange={handlecheckClick} />
            <Checkbox radio  label='SQLite3' name='persistencia' value='3' checked={valueItem === '3'} onChange={handlecheckClick} />
            <Checkbox radio  label='MongoDB Local' name='persistencia' value='4' checked={valueItem === '4'} onChange={handlecheckClick} />
            <Checkbox radio  label='MongoDB DBaas' name='persistencia' value='5' checked={valueItem === '5'} onChange={handlecheckClick} />
            <Checkbox radio  label='Firebase' name='persistencia' value='6' checked={valueItem === '6'} onChange={handlecheckClick} />
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item
            name='Carrito'
            active={activeItem === 'Carrito'}
            onClick={handleItemClick}
          />
          <Menu.Item>
            <Checkbox label='Soy Un Admin' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )

}

export default MenuNav
// export default class menuNav extends Component {

// const menuNav = () => <Menu items={items} />

// export default menuNav
