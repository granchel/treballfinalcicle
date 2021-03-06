import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Iempreses } from "../interfaces";



@Injectable()

export class EmpresesService{
  tipoempresa: string;

        constructor(private db: AngularFireDatabase){ }

    getEmpreses(nom : string): firebase.default.database.Reference{
      console.log("dins de getEmpreses"+nom);
      let ref = this.db.database.ref("empreses").child(nom);
      console.log(ref.key);
      
      return ref;
    }

    getEmpresa(key : string) : firebase.default.database.Reference {
      let ref = this.db.database.ref("empreses").child(this.tipoempresa);
      return ref.child(key);
    }
       
    setEmpresa(empresa: Iempreses){
      let ref = this.db.database.ref("empreses").child(this.tipoempresa);
      let res = ref.push(empresa);
      console.log("he insertado"+res.key);
      
    }

    getTipo(): string {
      return this.tipoempresa;
    }

    setTipo(tipo : string){
      this.tipoempresa = tipo;
    }

}
