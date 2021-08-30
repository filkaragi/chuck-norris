import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import {MatSelectModule} from "@angular/material/select";
import {NgxMatSelectModule} from "ngx-mat-select";
import { FormsModule } from '@angular/forms';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { SearchComponent } from './page/search/search.component';
import {MatInputModule} from "@angular/material/input";
import { FavoritesComponent } from './page/favorites/favorites.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    JokeListComponent,
    SearchComponent,
    FavoritesComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSelectModule,
        NgxMatSelectModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
