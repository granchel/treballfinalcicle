import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iempreses, Iempreseskey } from '../interfaces';
import { EmpresesService } from '../services/empreses.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {

  nombre : string;
  preciohora : number;
  descripcion: string;
  nom : string;

  empreses: Iempreses[] = [];
  

  constructor( private _empresesService : EmpresesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
 
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

