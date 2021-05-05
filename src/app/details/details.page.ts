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

  nombre : string;
  preciohora : number;
  descripcion: string; 

  constructor(private activatedRoute: ActivatedRoute,
    private _empresesService : EmpresesService) { }

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.paramMap.get("key");
    console.log("he recibido un "+this.key);

    let ref = this._empresesService.getEmpresa(this.key);

    
    

    ref.once("value", snapshot =>{
      this.nombre = snapshot.val().nombre;
      this.preciohora = snapshot.val().preciohora;
      this.descripcion = snapshot.val().descripcion;
      
     
    })
  }
    
  }




