class Index {
    constructor() {
        this.configurarElementos();
    }
    // método responsável pelo data bading dos elementos da página(dados da página)
    configurarElementos() {
        this.btnCadastrar = document.getElementById("btnCadastrar");
        this.btnCadastrar.addEventListener("click", () => console.log("Clicado"));
    }
}
new Index();
export {};
