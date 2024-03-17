import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { Home1Component } from './home1/home1.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about-us", component: AboutusComponent },
    { path: "contact-us", component: ContactusComponent },
    { path: "dynamic-form", component: DynamicFormComponent },
    { path: "home1", component: Home1Component },
    { path: "emp1", loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule) }
]
    ;
