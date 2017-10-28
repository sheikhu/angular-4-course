import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';

const authRoutes = [
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(authRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthModule {
}
