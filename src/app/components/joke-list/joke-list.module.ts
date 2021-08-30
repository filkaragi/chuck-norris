import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeListRoutingModule } from './joke-list-routing.module';
import { JokeListComponent } from './joke-list.component';


@NgModule({
    declarations: [
        // JokeListComponent,
    ],
    imports: [
        CommonModule,
        JokeListRoutingModule
    ]
})
export class JokeListModule { }
