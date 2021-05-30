import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iempreses, Iempreseskey } from '../interfaces';
import { EmpresesService } from '../services/empreses.service';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.page.html',
  styleUrls: ['./llista.page.scss'],
})
export class LlistaPage implements OnInit {

  oculto : boolean = false;
  width : number = 250;
  bototext : string ="Ocultar"
  nombre : string;
  preciohora : number;
  descripcion: string;
  localidad : string;
  tlf : number;
  email : string;

  nom : string;

  empreses: Iempreses[] = [];
  textoBuscar: string = '';
  

  constructor( private _empresesService : EmpresesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.nom = this.activatedRoute.snapshot.paramMap.get("nom");

    this._empresesService.setTipo(this.nom);

    let ref = this._empresesService.getEmpreses(this.nom);
       
    ref.once("value", snapshot =>{
      console.log("snapshot");
      
      snapshot.forEach(child => {
        console.log("entre");
        
        let value : Iempreseskey = {
          "id" : child.val().id,
          "nombre" : child.val().nombre,
          "descripcion" : child.val().descripcion,
          "preciohora" : child.val().preciohora,
          "localidad" : child.val().localidad,
          "tlf" : child.val().tlf,
          "email" : child.val().email,
          "key" : child.key
        };
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

  buscar( event ) {
    this.textoBuscar = event.detail.value;
  }
  
}
