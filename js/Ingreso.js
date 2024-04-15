class Ingreso extends Dato{
    static contadorIngresos = 0;
    constructor(descripcion, valor){
        super(descripcion, Number(valor));
        this._id = ++ Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}
