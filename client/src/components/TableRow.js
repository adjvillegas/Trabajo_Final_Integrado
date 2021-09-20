import React, { useState } from 'react'

import { Table, Checkbox, Input } from 'semantic-ui-react'

const TableRow = ({row}) => {

    const [enabled, setEnabled] = useState(false)

    const toggle = () => {
        setEnabled(!enabled)
    }

    return (
        <Table.Row>
            <Table.Cell>
                { !enabled ?  row.nombre : 
                <Input type='text' value={row.nombre}></Input>
                }
            </Table.Cell>
            <Table.Cell>
                { !enabled ?  row.codigo : 
                <Input type='text' value={row.codigo}></Input>
                }
            </Table.Cell>
            <Table.Cell>
                { !enabled ?  row.descripcion : 
                <Input type='text' value={row.descripcion}></Input>
                }
            </Table.Cell>
            <Table.Cell>
                { !enabled ?  row.precio : 
                <Input type='text' value={row.precio}></Input>
                }
            </Table.Cell>
            <Table.Cell>
                { !enabled ?  row.stock : 
                <Input type='text' value={row.stock}></Input>
                }
            </Table.Cell>
            <Table.Cell>
                { !enabled ?  row.foto : 
                <Input type='text' value={row.foto}></Input>
                }
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Checkbox toggle/>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Checkbox onChange={toggle} checked={enabled}/>
            </Table.Cell>            
        </Table.Row>
    )
}

export default TableRow
