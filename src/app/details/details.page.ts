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
  localidad : string;
  tlf : number;
  email : string;

  nom : string;


  constructor(private activatedRoute: ActivatedRoute,
    private _empresesService : EmpresesService) { }

  ngOnInit() {

    // this.nom = this.activatedRoute.snapshot.paramMap.get("nom");
    // this._empresesService.setTipo(this.nom);

    this.key = this.activatedRoute.snapshot.paramMap.get("key");
    console.log("he recibido un "+this.key);

    let ref = this._empresesService.getEmpresa(this.key);

    

    ref.once("value", snapshot =>{
      this.nombre = snapshot.val().nombre;
      this.preciohora = snapshot.val().preciohora;
      this.descripcion = snapshot.val().descripcion;
      this.localidad = snapshot.val().localidad;
      this.tlf = snapshot.val().tlf;
      this.email = snapshot.val().email;
     
    })
    
  }

  }




