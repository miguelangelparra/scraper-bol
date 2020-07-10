import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Table } from "react-bootstrap"

export const TableUltimosPrecios = () => {

  const [simbolos, setSimbolos] = useState("")
  const obtenerSimbolos = async () => await axios.get("http://localhost:8080/api/obtenerSimbolos").then(res => setSimbolos(res.data))

  useEffect(() => {
    obtenerSimbolos()

  }, [])
  return (<>
    {simbolos != "" ? <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{simbolos[0].simbolo}</th>
          <th>{simbolos[0].ultPrecio}</th>
          <th>{simbolos[0].variacion}</th>
          <th>{simbolos[0].negociados}</th>
          <th>{simbolos[0].monto}</th>
          <th>{simbolos[0].hora}</th>
        </tr>
      </thead>

      <tbody>
        {simbolos.map((simbolo, index) => {
          if (index === 0) return
          return (<tr key={index}>
            <td >{simbolo.simbolo}</td>
            <td>{simbolo.ultPrecio}</td>
            <td>{simbolo.variacion}</td>
            <td>{simbolo.negociados}</td>
            <td >{simbolo.monto}</td>
            <td>{simbolo.hora}</td>
          </tr>)
        })
        }
      </tbody>
    </Table> : ""}
  </>
  )


}