import { Injectable } from "@angular/core";
import { Iempreses } from "../interfaces";


@Injectable()

export class EmpresesService{

    empreses: Iempreses[] = [
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
        ]


    getEmpreses(): Iempreses[]{
        return this.empreses;
    }

    getEmpresa(id : number) : Iempreses {
      return this.empreses.find(x => x.id == id);
    }
       

}