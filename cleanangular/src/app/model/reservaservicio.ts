import { Cliente } from "./cliente";
import { Limpiador } from "./limpiador";
import { Servicio } from "./servicio";

export interface ReservaServicio{
    id_reserva:number;
    metodoPago:String;
    fechaReserva:Date;
    fechaServicio:Date;
    cliente:Cliente;
    limpiador:Limpiador;
    servicio:Servicio;
}