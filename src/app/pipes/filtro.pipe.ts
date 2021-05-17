import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string): any[] {

    console.log(arreglo);
    
    
    if ( texto === '' ){
      return arreglo;
    }
  
    /*texto = texto.toLowerCase();
    console.log("el text es"+texto);*/
    
    return arreglo.filter( item => {
      return item.nombre.toLowerCase()
              .includes( texto.toLowerCase() );
    });
    
    //return arreglo;
   
  }

}
