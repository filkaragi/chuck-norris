import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './page/categories/categories.component'
import { HomepageComponent } from './page/homepage/homepage.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { SearchComponent } from './page/search/search.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
