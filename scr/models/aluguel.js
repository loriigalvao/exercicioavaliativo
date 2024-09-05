const estudante_controller = require("../controllers/estudante.js")
const livro_controller = require("../controllers/livro.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    console.log(body);
    if(
        body.aluguel != undefined &&
        body.devolucao != undefined &&
        livro_controller.show(body.livro_id) && estudante_controller.show(body.estudante_id) 
    ) {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            aluguel: body.aluguel,
            devolucao: body.devolucao
            
        }
    }
}

module.exports = model