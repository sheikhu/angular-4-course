import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingRoutingModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthModule {
}
