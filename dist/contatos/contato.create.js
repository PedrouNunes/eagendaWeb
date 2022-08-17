import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.local-storage.js";
class ContatoPaginaCadastro {
    constructor(repositorioContatos, id) {
        this.repositorioContatos = repositorioContatos;
        this.configurarElementos();
        if (id) {
            this.idSelecionado = id;
            const contatoSelecionado = this.repositorioContatos.selecionarPorId(id);
            if (contatoSelecionado)
                this.preencherFormulario(contatoSelecionado);
        }
    }
    preencherFormulario(contatoSelecionado) {
        this.txtNome.value = contatoSelecionado.nome;
        this.txtEmail.value = contatoSelecionado.email;
        this.txtTelefone.value = contatoSelecionado.telefone;
        this.txtEmpresa.value = contatoSelecionado.empresa;
        this.txtCargo.value = contatoSelecionado.cargo;
    }
    configurarElementos() {
        this.txtNome = document.getElementById("txtNome");
        this.txtEmail = document.getElementById("txtEmail");
        this.txtTelefone = document.getElementById("txtTelefone");
        this.txtEmpresa = document.getElementById("txtEmpresa");
        this.txtCargo = document.getElementById("txtCargo");
        this.btnSalvar = document.getElementById("btnSalvar");
        // operador discard _ (discartar parâmetro que está vindo caso não queiramos usá-lo)
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        const contato = this.obterDadosFormulario();
        if (!this.idSelecionado)
            this.repositorioContatos.inserir(contato);
        else
            this.repositorioContatos.editar(contato.id, contato);
        // método para redirecionar usuario
        window.location.href = "contato.list.html";
    }
    obterDadosFormulario() {
        const nome = this.txtNome.value;
        const email = this.txtEmail.value;
        const telefone = this.txtTelefone.value;
        const empresa = this.txtEmpresa.value;
        const cargo = this.txtCargo.value;
        let contato = null;
        if (!this.idSelecionado)
            contato = new Contato(nome, email, telefone, empresa, cargo);
        else
            contato = new Contato(nome, email, telefone, empresa, cargo, this.idSelecionado);
        return contato;
    }
}
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage(), id);
