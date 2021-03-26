import { Component } from '@angular/core';
import { Ibocadillos } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo : string = "Bocadillo de Sepia";
  oculto : boolean = false;
  ruta : string = "../../assets/img/sepia.jpg";
  width : number = 250;
  bototext : string ="Ocultar"
  nombre : string;

  bocadillos: Ibocadillos[] = [
  {
    "id" : 1,
    "nombre" : "sepia",
    "descripcion" : "el bocadillode de la casa",
    "precio" : 6.2
    
  },
  {
    "id" : 2,
    "nombre" : "chivito",
    "descripcion" : "el bocadillode de la casa",
    "precio" : 4.2
  }
  ]
    

  constructor() {}

  cambiar_Oculto() : void{
    this.oculto = !this.oculto;
    if (this.oculto == true) {
      this.bototext = "Mostar"
    }else{
      this.bototext = "Ocular"
    }
  }

}
