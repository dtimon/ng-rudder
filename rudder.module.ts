
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RudderConfig } from './interfaces/rudder-config';
import { Format, Logic, Mapping } from './rudder.providers';

/**
 * Modulo de patrón de diseño que permite generar/modificar lógica de negocio de forma ágil.
 * Perjudica el rendimiento y mejora el mantenimiento en equipo grande de personas.
 * 
 * @export
 * @class RudderModule
 */
@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [],
    providers: []
})
export class RudderModule {

    public static forRoot(config: RudderConfig): ModuleWithProviders {
        //Si no ha configuración de format se recupera el del biblioteca
        config.format = config.format || Format;
        config.logic = config.logic || Logic;
        return {
            ngModule: RudderModule,
            providers: [
                Mapping,
                { provide: Format, useClass: config.format },
                { provide: Logic, useClass: config.logic },
            ]
        };
    }
}
