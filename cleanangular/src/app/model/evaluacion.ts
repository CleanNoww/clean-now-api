import { Cliente } from "./cliente";
import { Limpiador } from "./limpiador";

export interface Evaluacion{
    id_evaluacion:number;
    calificacion:number;
    comentario:String;
    cliente:Cliente;
    limpiador:Limpiador;
}