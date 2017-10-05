import { Injectable } from '@angular/core';

import { Format } from './format';
import { Logic } from './logic';

/**
 * TODO: traducir a inglés
 *  Permite hacer el mapeo desde una entrada de datos a una salida formateada.
  * 
 *  1 - Mapp-In Transformación de entrada de datos a objeto a manejar por la lógica de negocio
 *  2 - Mapp-Out Manejo de la lógica de negocio sobre datos y funciones con acceso a objeto
  * 
 * @export
 * @class Mapping
 */
@Injectable()
export class Mapping {

    constructor(public format: Format, public logic: Logic) {
        console.log("Contructor del MapIn");
    }


    /**
     * Mapea los datos de entrada bajo una configuración asociado a un provider con fucniones de formateo
     * 
     * @param {any} config 
     * @param {any} input 
     * @returns 
     * @memberof Mapping
     */
    in(config, input) {
        var  output;
        console.log("FORMAT recibido (puede estar sobre escrito)", this.format);
        return output;
    }

    /**
     * Mapea los datos de salida bajo una configuración donde se asocia la lógica a un provider con funciones de logica de negocio
     * 
     * @param {any} config 
     * @param {any} input 
     * @returns 
     * @memberof Mapping
     */
    out(config, input) {
        let output;
        console.log("LOFIC recibida (debe estar sobre escrita)", this.logic);
        return output;
    }
}