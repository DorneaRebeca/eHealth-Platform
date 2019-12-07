import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'login', component: LoginComponent }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
