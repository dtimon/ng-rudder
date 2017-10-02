
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RudderConfig } from './interfaces/rudder-config';
import { Format, Logic, Mapping } from './rudder.providers';

// https://coryrylan.com/blog/angular-tips-dynamic-module-imports-with-the-angular-cli

//t
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
