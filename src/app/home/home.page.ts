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
  preciohora : number;
  descripcion: string;

  empreses: Iempreses[] = [];
  

  constructor( private _empresesService : EmpresesService) { }

  ngOnInit(){
    let ref = this._empresesService.getEmpreses();

    ref.once("value", snapshot =>{
      snapshot.forEach(child => {
        let value = child.val();
        this.empreses.push(value);
        console.log("he encontrado "+child.val().nombre);
      })
    })
  }

  cambiar_Oculto() : void{
    this.oculto = !this.oculto;
    if (this.oculto == true) {
      this.bototext = "Mostar"
    }else{
      this.bototext = "Ocular"
    }
  }

  insertar(){
    let empresa: Iempreses={"id": this.empreses.length+1,
                        "nombre": this.nombre,
                        "preciohora": this.preciohora,
                        "descripcion": this.descripcion
                      };
    
    this._empresesService.setEmpresa(empresa);
  }

}
