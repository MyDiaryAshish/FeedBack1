import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  /*
  💬 What’s happening here?

  initializeApp(...): Bootstraps the Firebase SDK with your config.

  getAuth(...): Initializes Firebase Authentication for login/logout/session handling.

   This service exposes the auth object to the rest of your app.
  */
  private app = initializeApp(environment.firebaseConfig);
  auth = getAuth(this.app);
}
