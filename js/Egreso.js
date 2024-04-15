class Egreso extends Dato{
    static contadorEgresos = 0;
    constructor(descripcion, valor){
        super(descripcion, Number(valor));
        this._id = ++ Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}