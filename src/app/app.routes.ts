import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },
    { path: 'client/:id/:test', component: ClientComponent },
    { path: 'users', component: UsersComponent },

];
