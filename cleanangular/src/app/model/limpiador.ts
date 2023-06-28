import { Evaluacion } from "./evaluacion"
import { ReservaServicio } from "./reservaservicio";
import { TipoLimpieza } from "./tipolimpieza";

export interface Limpiador{
    id_limpiador:number;
    dni:number;
    edad:number;
    nombre_completo:String;
    email:String;
    contraseña:String;
    tipoRegistro:String;
    num_servicios:number;
    telefono:String;
    descripcion:String;
    calificacion:number;
    reservas:ReservaServicio[];
    evaluaciones:Evaluacion[];
    tipoLimpieza:TipoLimpieza[];
}