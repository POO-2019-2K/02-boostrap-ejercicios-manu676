import Agenda from "./Agenda.js";
import Reservation from "./Reservacion.js";

class Main{
    constructor(){
        this._agenda= new Agenda(
            document.querySelector("#reservacion"), 
            document.querySelector("#info"));
        
        document.querySelector("#btnAdd")
        .addEventListener("click", () =>{
            let name = document.querySelector("#name").value;
            let telephone = document.querySelector("#telefono").value;
      
            let sBook = document.querySelector("#bookIn").value;
            sBook= sBook.split("-");
            let bookin = new Date(sBook[0],sBook[1]-1,sBook[2]);

            let reservaciones = new Reservation(name, telephone, bookin);

            this._agenda.addBook(reservaciones);
        })
    }
}   
let m = new Main();