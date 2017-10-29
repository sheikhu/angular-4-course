import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJf_hmhTav0o7z9iEWVolVFAvg-gE8vYs',
      authDomain: 'sheikhu-recipes.firebaseapp.com',
    });
  }
}
