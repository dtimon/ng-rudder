import { Injectable } from '@angular/core';


@Injectable()
export class Format {

    constructor() {
        console.log("Constructor del Format Original");
     }

    toNumber(value, options) {
        console.log("To Number original");
        return value;
    }

    toStandardDate(value, options) {
        console.log("To StandardDate");
    }

}