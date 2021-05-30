export interface Iempreses{
"id" : number,
"nombre" : string,
"descripcion" : string,
"preciohora" : number,
"localidad" : string
"tlf" : number;
"email" : string;
}

export interface Iempreseskey extends Iempreses{
"key" : string
}