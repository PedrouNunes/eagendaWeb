import { EntidadeBase } from "../shared/entidade.model.js";
// Extends = herança
// implements = implementando
export class Tarefa extends EntidadeBase {
    constructor(descricao, prioridade, id) {
        super();
        if (id) {
            this.id = id;
        }
        this.descricao = descricao;
        this.dataCriacao = new Date();
        // this.dataConclusao = new Date();
        this.prioridade = prioridade;
    }
}
