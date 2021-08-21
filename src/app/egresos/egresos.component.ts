import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { egresoService } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

 egresos: Egreso[] = []; 
 @Input() ingresoTotal : number; 

  constructor(private egresoServicio: egresoService) { }

  ngOnInit(): void {

    this.egresos = this.egresoServicio.egresos; 
  }

  eliminarRegistro(egreso: Egreso){

      this.egresoServicio.eliminar(egreso); 

  }

  calcularPorcentaje(egreso: Egreso){

    return egreso.valor / this.ingresoTotal; 
  }
}
