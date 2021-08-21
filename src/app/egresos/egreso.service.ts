import { Egreso } from "./egreso.model";

 
export class egresoService{


    egresos :Egreso[] = [
        new Egreso ("alquiler apartamento", 20000),
        new Egreso ("ropa", 10000)
    ]; 

    eliminar(egreso : Egreso){

        const indice: number = this.egresos.indexOf(egreso); 
        this.egresos.splice(indice, 1);  
    }

}



