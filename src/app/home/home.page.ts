import { Component } from '@angular/core';
import { Iempreses } from '../interfaces';
import { EmpresesService } from '../services/empreses.service';

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

  empreses: Iempreses[];
  

  constructor( private _empresesService : EmpresesService) { }

  ngOnInit(){
    this.empreses = this._empresesService.getEmpreses();
  }

  cambiar_Oculto() : void{
    this.oculto = !this.oculto;
    if (this.oculto == true) {
      this.bototext = "Mostar"
    }else{
      this.bototext = "Ocular"
    }
  }

}
