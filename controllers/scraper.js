const axios = require("axios");
const cheerio = require("cheerio")
const fs = require("fs")

module.exports.getSimbolos = async() => {
return await  axios.get("http://www.bolsadecaracas.com/esp/textos/resumenTitRV.jsp")
    .then(response => {
      const $ = cheerio.load(response.data)
      const items = $('tr').toArray().map(item => {
        $item = $(item);
        let acciones = $item.find('td').toArray()
        //let objeto = {
        //titulo: $(acciones[0]).text()
        //}
        //console.log(objeto)
        return acciones.map(inside => {
          $inside = $(inside)
          return $inside.text()
        })

      })
      return items

    })
    .then(simbolosRaw => {
      let simbolos = simbolosRaw.map(simbolo => {
        return {
          simbolo: simbolo[0],
          ultPrecio: simbolo[1].split("\n")[0],
          variacion: simbolo[2],
          negociados: simbolo[3].trim(),
          monto: simbolo[4].trim(),
          hora: simbolo[5].trim()
        }
      })

      let fecha= new Date()
      let mes= fecha.getMonth()
      let dia =fecha.getDate()

      fs.writeFile(`./public/archivo/historico${mes}-${dia}.json`, JSON.stringify(simbolos), (err) => {
        if (err) return console.log(err)
        console.log("historico del dia salvados ")

      })
      return(simbolos)
    }
    )
}