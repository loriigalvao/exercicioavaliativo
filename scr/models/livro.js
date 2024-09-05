const rede_controller = require("../controllers/livro.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        
        body.titulo != undefined &&
        body.autor!= undefined &&
        body.ano != isNaN,
        body.genero != undefined
    ) {
        return {
            id,
            
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
       
        }
    }
}

module.exports = model