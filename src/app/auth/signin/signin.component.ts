import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin( f: NgForm ) {
    const data = f.value;
    this.authService.signin(data.email, data.password);
  }
}
