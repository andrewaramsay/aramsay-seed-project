import { NgModule } from '@angular/core';

import { ThingComponent } from './thing.component';

@NgModule({
    declarations: [
        ThingComponent
    ],
    exports: [
        ThingComponent
    ]
})
export class ThingModule {}
