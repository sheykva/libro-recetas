import { Component, Output, EventEmitter } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent {
recetas: Array<Receta> = [];
@Output() recetaSeleccionada = new EventEmitter<Receta>()

receta: Receta = new Receta('Castañas de pobre','Necesitas: 1Kg de castañas crudas, un horno y un contrato de gas (si no dispones de gas, también se puede con un saco de carbon)', 'http://todofondos.com/bin/fondos/01/03/07d.jpg', []);

  constructor() { }

  seleccionarReceta(){
    this.recetaSeleccionada.emit(this.receta);
  }

 

}
