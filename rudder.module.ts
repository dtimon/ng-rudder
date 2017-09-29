
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RudderConfig } from './interfaces/rudder-config';
import * as RudderProviders from './rudder.providers';

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

        return {
            ngModule: RudderModule,
            providers: [{ provide: RudderProviders.Format, useClass: config.format },
            RudderProviders.MapIn
            ]
        };
    }
}
