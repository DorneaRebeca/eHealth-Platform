import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent  as HomePatientComponent} from "./patient/home/home.component";
import {HomeComponent as HomeDoctorComponent} from "./doctor/home/home.component"

const routes: Routes = [
    { path: 'login', component: LoginComponent } ,
    { path: 'home-patient', component: HomePatientComponent },
    { path: 'home-doctor', component: HomeDoctorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
