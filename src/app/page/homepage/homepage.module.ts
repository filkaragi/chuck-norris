import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
// import { JokeListRoutingModule } from '../../components/joke-list/joke-list-routing.module';
import { HomepageComponent } from './homepage.component';


@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    // JokeListRoutingModule
  ]
})
export class HomepageModule { }
