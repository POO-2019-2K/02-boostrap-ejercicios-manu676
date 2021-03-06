export default class Registro{
    constructor(tableTransacciones, tableInfo){
        this._tableTransacciones= tableTransacciones;
        this._tableInfo = tableInfo;

        this._numDeposito = 0;
        this._totalDeposito = 0;
        this._numRetiro = 0;
        this._totalRetiro = 0;
        this._numMovimientos = 0;
        
    }
    addMove(move){
        let row = this._tableTransacciones.insertRow(-1);
        let cellName = row.insertCell(0); 
        let cellCuenta = row.insertCell(1);
        let cellTipoMovimiento = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellSaldo = row.insertCell(4);

        cellName.innerHTML = move.name;
        cellCuenta.innerHTML = move.cuenta;
        cellTipoMovimiento.innerHTML = move.tipoMovimiento;
        cellCantidad.innerHTML = move.cantidad;

        if(move.tipoMovimiento === "Deposito"){
        cellSaldo.innerHTML = move.getDeposito();
        this._numDeposito++;
        this._tableInfo.rows[1].cells[1].innerHTML = this._numDeposito ; 
        ///
        this._totalDeposito = move.getDeposito();
        this._tableInfo.rows[2].cells[1].innerHTML = this._totalDeposito;
        }
        if(move.tipoMovimiento === "Retiro"){
            cellSaldo.innerHTML = move.getRetiro();
            this._numRetiro++;
            this._tableInfo.rows[3].cells[1].innerHTML = this._numRetiro;
            ///
            this._totalRetiro = move.getRetiro();
            this._tableInfo.rows[4].cells[1].innerHTML = this._totalRetiro;

        }
        
        this._numMovimientos++;        
        this._tableInfo.rows[5].cells[1].innerHTML = this._numMovimientos;
        this._tableInfo.rows[6].cells[1].innerHTML = move.getSaldo();

    }
}
