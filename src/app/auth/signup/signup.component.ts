import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm ) {
    const data = form.value;
    console.log(data);
    this.authService.signup(data.email, data.password);
  }
}
