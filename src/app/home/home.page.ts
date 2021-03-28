import { Component } from '@angular/core';
import { Iempreses } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //titulo : string = "Bocadillo de Sepia";
  oculto : boolean = false;
  //ruta : string = "../../assets/img/sepia.jpg";
  width : number = 250;
  bototext : string ="Ocultar"
  nombre : string;

  bocadillos: Iempreses[] = [
  {
    "id" : 1,
    "nombre" : "maniac",
    "descripcion" : "Empresa especializada en diseño web",
    "preciohora" : 10
    
  },
  {
    "id" : 2,
    "nombre" : "Fontareno paco",
    "descripcion" : "Empresa especializada en fontaneria",
    "preciohora" : 7
  },
  {
    "id" : 3,
    "nombre" : "Carpintero Juan",
    "descripcion" : "Empresa especializada en carpinteria",
    "preciohora" : 9
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
