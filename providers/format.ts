import { Injectable } from '@angular/core';


@Injectable()
export class Format {

    constructor() {
        console.log("Contructor del Format");
     }

    toNumber() {

        console.log("To Number original");
    }

}