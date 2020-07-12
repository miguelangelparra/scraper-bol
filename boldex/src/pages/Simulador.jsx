import React from 'react'

export const Simulador = () => {
    let simbolos = []
    //FUNCION CARRITO DE OPERACIONNES 
    //ENVIAR A COMPONENTE RESULTADO
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>{simbolos[0].simbolo}</th>
                    <th>{simbolos[0].ultPrecio}</th>
                    <th>{simbolos[0].monto}</th>
                </tr>
            </thead>

            <tbody>
                {simbolos.map((simbolo, index) => {
                    if (index === 0) return
                    return (<tr key={index}>
                        <td >{simbolo.simbolo}</td>
                        <td>{simbolo.ultPrecio}</td>
                        <td >{simbolo.monto}</td>
                    </tr>)
                })
                }
            </tbody>
        </Table>

    )
}