import { Evaluacion } from "./evaluacion";
import { ReservaServicio } from "./reservaservicio";

export interface Cliente{
    id_cliente:number;
    dni:number;
    nombre_completo:String;
    email:String;
    password:String;
    tipoRegistro:String;
    direccion:String;
    historialReservas:ReservaServicio[];
    historialEvaluaciones:Evaluacion[];
}