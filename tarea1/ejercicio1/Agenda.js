export default class Agenda{

    constructor(tableReservacion, tableInfo){
        this._tableReservacion = tableReservacion;
        this._tableInfo = tableInfo;

        this._numBookIn = 0;
        this._sumArrive = 0;
    }

    addBook(book){
        let row = this._tableReservacion.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellTelephone = row.insertCell(1);
        let cellBookin =row.insertCell(2);
        let cellArrive= row.insertCell(3);
        
        cellName.innerHTML = book.name;
        cellTelephone.innerHTML = book.telephone;
        cellBookin.innerHTML = book.getBookAsString();
        cellArrive.innerHTML = book.getArrive();


        this._numBookIn++;
        this._sumArrive = this._sumArrive + book.getArrive();

        this._tableInfo.rows[0].cells[1].innerHTML = this._numBookIn;
    }

}