import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent }
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class AuthRoutingRoutingModule {
}
