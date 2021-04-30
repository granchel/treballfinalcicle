import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iempreses, Iempreseskey } from '../interfaces';
import { EmpresesService } from '../services/empreses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  key : string;

 
  
  empreses: Iempreses[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _empresesService : EmpresesService) { }

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.paramMap.get("key");
    console.log("he recibido un "+this.key);

    let ref = this._empresesService.getEmpresa(this.key);

    ref.once("value", snapshot =>{
      snapshot.forEach(child => {
        let value : Iempreseskey = {
          "id" : child.val().id,
          "nombre" : child.val().nombre,
          "descripcion" : child.val().descripcion,
          "preciohora" : child.val().preciohora,
          "key" : child.key
        };
        this.empreses.push(value);
        console.log("he encontrado "+child.val().nombre);
      })
    })
  }
    
  }


//esto es per a mostrar els detalls paregut al llistat
  /*ngOnInit(){
    let ref = this._empresesService.getEmpreses();

    ref.once("value", snapshot =>{
      snapshot.forEach(child => {
        let value : Iempreseskey = {
          "id" : child.val().id,
          "nombre" : child.val().nombre,
          "descripcion" : child.val().descripcion,
          "preciohora" : child.val().preciohora,
          "key" : child.key
        };
        this.empreses.push(value);
        console.log("he encontrado "+child.val().nombre);
      })
    })
  }*/


