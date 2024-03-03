import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about-us", component: AboutusComponent },
    { path: "contact-us", component: ContactusComponent }
];
