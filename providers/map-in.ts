import { Injectable } from '@angular/core';

import { Format } from './format';


@Injectable()
export class MapIn {

    constructor(public format: Format) {
        console.log("Contructor del Mapin");
    }
    
    transform() {
        this.format.toNumber();
        console.log("Llegamos a trasnformar con estos formatos");
    }

}