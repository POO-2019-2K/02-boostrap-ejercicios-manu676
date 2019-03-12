
export default class Movimiento{
    constructor(name, cuenta, tipoMovimiento, cantidad){
        this._name = name;
        this._cuenta= cuenta;
        this._tipoMovimiento = tipoMovimiento;
        this._cantidad = cantidad;
        this._saldo = 0; 
    }
    get name(){
        return this._name;
    }
    get cuenta(){
        return this._cuenta;
    }
    get cantidad(){
        return this._cantidad;
    }
    get tipoMovimiento(){
        return this._tipoMovimiento;
    }
    getDeposito(){
            this._saldo = this._saldo + this._cantidad;
            return this._saldo;
    }
    getRetiro(){
        this._saldo = this._saldo - this._cantidad;
        return this._saldo;
    }
    getSaldo(){
        this._saldo = getDeposito() - getRetiro();
        return this._saldo;
    }

}