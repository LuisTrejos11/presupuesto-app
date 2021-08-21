import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { egresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { ingresoService } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = "ingresoOperacion";
  descripcionInput: string; 
  valorInput: number; 

  constructor(private ingresoServicio: ingresoService, private egresoServicio: egresoService) {

   }

  ngOnInit(): void {
  }

  tipoOperacion(evento){

    this.tipo = evento.target.value; 

  }

  agregarValor(){

    if(this.tipo === "ingresoOperacion"){

      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
    }else{

      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }

  }

}
