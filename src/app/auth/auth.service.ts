import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private router: Router) {}
  signup( email: string, password: string ) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(( response ) => console.log(response))
      .catch(( error ) => console.log(error));
  }

  signin( email: string, password: string ) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(( response ) =>  {
      console.log(response);
      this.router.navigate(['/recipes']);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);
      })
      .catch(( error ) => console.log(error));
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken(true)
        .then((token: string) => {
            console.log(token);
            this.token = token;
        }).catch((error) => this.token = null);

    return this.token;
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    });
    this.token = null;
  }
}
