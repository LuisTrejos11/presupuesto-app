import { Ingreso } from "./ingreso.model";


export class ingresoService {



    ingresos : Ingreso[] = [
    
        new Ingreso("Venta carro", 100000),
        new Ingreso("Sueldo", 600000)
    ]

    eliminar(ingreso : Ingreso){

        const indice: number = this.ingresos.indexOf(ingreso); 
        this.ingresos.splice(indice, 1);  
    }

}