import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Iempreses } from "../interfaces";


@Injectable()

export class EmpresesService{

    /*empreses: Iempreses[] = [
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
        ]*/

        constructor(private db: AngularFireDatabase){

        }

    getEmpreses(): firebase.default.database.Reference{
      let ref = this.db.database.ref("empreses");
      return ref;
    }

    /*getEmpresa(id : number) : Iempreses {
      return this.empreses.find(x => x.id == id);
    }*/
       
    setEmpresa(empresa: Iempreses){
      let ref = this.db.database.ref("empreses");
      let res = ref.push(empresa);
      console.log("he insertado"+res.key);
      
    }

}