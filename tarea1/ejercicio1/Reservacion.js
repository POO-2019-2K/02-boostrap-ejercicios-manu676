export default class Reservation{
    constructor(name, telephone, dayReservation){
        this._name = name.toUpperCase();
        this._telephone = telephone;
        this._dayReservation = dayReservation;
    }
    get name(){
        return this._name;
    }
    get telephone(){
        return this._telephone;
    }
    getBookAsString(){
        let d =this._dayReservation.getDate() + "/"+
        (this._dayReservation.getMonth()+1)+ "/"+
        this._dayReservation.getFullYear();

        return d
    }
    get dayReservation(){
        return this._dayReservation;
    }
    //Dia de llegada
    getArrive(){
        let oneDay = 24*60*60*1000;
        let oneYear = oneDay * 365;
        let today = new Date();
        let differenceMs = Math.abs(this._dayReservation - today);
        console.log(differenceMs);
        console.log(differenceMs/oneYear);
        return Math.round(differenceMs/oneYear);
    }
}