import Movimiento from "./Transaccion.js"
import Registro from "./Agenda.js"

class Main{
    constructor(){
    this._registro = new Registro(document.querySelector("#agenda"), document.querySelector("#info"));

    document.querySelector("#btnAdd").addEventListener("click", () => {
        let name = document.querySelector("#name").value;
        let cuenta = document.querySelector("#cuenta").value;
        let tipoMovimiento = document.querySelector("#select").value;
        let cantidad = document.querySelector("#cantidad").value;

        let cliente = new Movimiento(name, cuenta, tipoMovimiento, cantidad);
        this._registro.addMove(cliente);
    });}
}

let m = new Main();