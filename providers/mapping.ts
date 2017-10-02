import { Injectable } from '@angular/core';

import { Format } from './format';


@Injectable()
export class Mapping {

    constructor(public format: Format) {
        console.log("Contructor del Mapin");
    }

    in(objectIncome) {
        //this.format.toNumber(10, {});
        console.log("FORMAT recibido", this.format);
        console.log("Llegamos a trasnformar con estos formatos");
    }

    out() {

    }

    incomeToInside(income: any) {

        let insideL0 = {};
        if (income) {
            Object.keys(income).forEach(element => {
                // console.log("ELEMENT", income[element]);
                switch (element) {
                    case "mapping":
                        //mapeo para mostrar texto: puede ser texto contribuido o de servicio
                        insideL0 = this._mappingIncome(income[element], insideL0);
                        break;
                    case "behaviour":
                        //mapeo del comportamiento del componente a nivel de formulario
                        insideL0 = this._behaviourIncome(income[element], insideL0);
                        break;
                    case "style":
                        //mapeo del comportamiento del componente a nivel de presentación
                        break;
                    default:
                        break;
                }
            });
        }
        return insideL0;
    }

    /**
     * MAPPING
     * 
     */
    private _mappingIncome(mapping, insideL0) {
        //Actualiza sólo en el objeto mapping
        insideL0['mapping'] = insideL0['mapping'] || {};
        Object.keys(mapping).forEach(field => {
            switch (mapping[field].type) {
                case "view":   // Texto contribuido o de servicio
                    break;
                case "links":   // Enlaces con iconos, textos
                    insideL0['mapping'][field] = this.__mappingLinks(field, mapping[field]);
                    break;
                default:
                    break;
            }
        });
        return insideL0;
    }

    private __mappingLinks(field, mappingL1) {

        /**
         * 
          {
              "mapping": {
                  "tabs": {
                      "type": "links",
                      "value": "servicios",
                      "options": [{
                          "type": "filter",
                          "value": "selectHome",
                          "options": [{
                              "type": "value",
                              "value": "productos",
                              "options": []
                          }, {
                              "type": "icon",
                              "value": "basket",
                              "options": [{
                                  "type": "left"
                              }]
                          }, {
                              "type": "text",
                              "value": "Productos",
                              "options": []
                          }]
                      }, {
                          "type": "filter",
                          "value": "selectHome",
                          "options": [{
                              "type": "value",
                              "value": "servicios",
                              "options": []
                          }, {
                              "type": "icon",
                              "value": "bowtie",
                              "options": [{
                                  "type": "left"
                              }]
                          }, {
                              "type": "text",
                              "value": "Reservados",
                              "options": []
                          }]
                      }]
                  }
              },
              "behaviour": {},
              "style": {}
          }
    
          (ViewCome)
            this.links = [{
              type: "filter",
              target: this.name,
              value: "favorites",
              icon: {
                left: "heart",
              },
              text: "Favoritos",
              options: undefined
            }, {
              type: "filter",
              target: this.name,
              value: "winkeds",
              icon: {
                left: "lock",
              },
              text: "Favoritos",
              options: undefined
            }];
         */
        interface ILinks {
            default: any,
            links: Array<ILink>
        }

        interface IModel {

        }

        interface ILink {
            type: string,
            target: string,
            value: IModel,
            icon: {
                left: string,
                right: string
            },
            text: string,
            options: Array<any>
        }

        let mapped = <ILinks>{};
        mapped.default = mappingL1.value;
        mapped.links = [];

        //En los links sólo hay una opcion de L1
        mappingL1.options.forEach((link, index) => {
            mapped.links[index] = {
                type: link.type,
                target: link.value,
                value: undefined,
                icon: undefined,
                text: undefined,
                options: undefined
            };
            link.options.forEach((element) => {
                switch (element.type) {
                    case "value":
                    case "text":
                        mapped.links[index][element.type] = element.value;
                        break;
                    case "icon":
                        mapped.links[index]['icon'] = mapped.links[index]['icon'] || {
                            left: "",
                            right: ""
                        };
                        if (element.options[0].type === "left") {
                            mapped.links[index]['icon']['left'] = element.value;
                        } else {
                            mapped.links[index]['icon']['right'] = element.value;
                        }
                        break;
                    default:
                        break;
                }
            });

        });
        return mapped;
    }


    /**
     * BEHAVIOUR
     * 
     */

    private _behaviourIncome(behaviour, insideL0) {
        insideL0['behaviour'] = insideL0['behaviour'] || {};
        Object.keys(behaviour).forEach(field => {
            //TODO: usar asign para evitar errores de mapeo
            insideL0['behaviour'][field] = behaviour[field];
        });
        return insideL0;
    }

    // private _stylesIncome() {

    // }

}