import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { ingresoService } from './ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos : Ingreso[] = []; 
  constructor(private ingresoServicio: ingresoService) {

  
   }

  ngOnInit(): void {

    this.ingresos = this.ingresoServicio.ingresos; 
  }

  eliminarRegistro(ingreso: Ingreso){

      this.ingresoServicio.eliminar(ingreso); 

  }
}
