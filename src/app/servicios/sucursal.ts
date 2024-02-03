import { plan } from "./plan";

export class sucursal {
    idGimnasio!: number;
    nombreGym!: string;
    codigoPostal!: string;
    estado!: string;
    ciudad!: string;
    colonia!: string;
    calle!: string;
    numExt!: number;
    numInt!: number;
    telefono!: string;
    tipo!: string;
    Franquicia_idFranquicia!: number;
    horarios!: string;
    casilleros!: number;
    estacionamiento!: number;
    energia!: number;
    bicicletero!: number;
    estatus!: number;
    membresias: plan[] = [];
}