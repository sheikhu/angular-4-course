import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class AuthService {

  constructor(private router: Router, private auth: AngularFireAuth, private notifications: NotificationsService) {}
  signup( email: string, password: string ) {
    this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then(( response ) => console.log(response))
      .catch(( error ) => console.log(error));
  }

  signin( email: string, password: string ) {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(( response ) =>  {
      console.log(response);
      this.router.navigate(['/recipes']);
      this.notifications.success('Success', 'Hello ' + this.auth.auth.currentUser.email);
      })
      .catch(( error ) => console.log(error));
  }

  isAuthenticated() {
    return !!this.auth.auth.currentUser;
  }

  updateUserProfile(name) {
    this.auth.auth.currentUser.updateProfile({
      displayName: name,
      photoURL: null
    }).then(() => {

    });
  }


  logout() {
    this.auth.auth.signOut().then(() => {
      this.notifications.success('Success', 'Good Bye !');

      this.router.navigate(['/']);
    });
  }
}
