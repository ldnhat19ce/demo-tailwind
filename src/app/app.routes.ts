import { Routes } from '@angular/router';
import { HomeComponent } from './common/pages/application/home/home.component';
import { NotFoundComponent } from './common/pages/general/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];
