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

    getEmpreses(nom : string): firebase.default.database.Reference{
      console.log("dins de getEmpreses"+nom);
      let ref = this.db.database.ref("empreses").child(nom);
      console.log(ref.key);
      
      return ref;
    }

    /*getEmpresa() : firebase.default.database.Reference{
     let ref = this.db.database.ref("empreses").child("fontaneria");
     //return ref.child(ref.key);
     return ref.child("-MYip2DS7PV9cct1FX4s")
    }*/

    getEmpresa(key : string) : firebase.default.database.Reference {
      let ref = this.db.database.ref("empreses").child("fontaneria");
      return ref.child(key);
      //return this.empreses.find(x = > x.id == id);
    }
       
    setEmpresa(empresa: Iempreses){
      let ref = this.db.database.ref("empreses").child("fontaneria");
      let res = ref.push(empresa);
      console.log("he insertado"+res.key);
      
    }

}
