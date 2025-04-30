// import { Injectable, inject } from '@angular/core';
// import { FirebaseService } from './firebase.service';
// import {
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut,
//   User
// } from 'firebase/auth';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private firebase = inject(FirebaseService);
//   private auth = this.firebase.auth;

//   // Emits current user info or null
//   private userSubject = new BehaviorSubject<User | null>(null);
//   user$ = this.userSubject.asObservable();

//   constructor() {
//     // Run once on app start to track session state
//     onAuthStateChanged(this.auth, (user) => {
//       this.userSubject.next(user);
//     });
//   }

//   loginWithEmail(email: string, password: string) {
//     return signInWithEmailAndPassword(this.auth, email, password);
//   }

//   loginWithGoogle() {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(this.auth, provider);
//   }

//   logout() {
//     return signOut(this.auth);
//   }

//   get currentUser(): User | null {
//     return this.auth.currentUser;
//   }
// }
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = inject(Auth);
  private router = inject(Router);

  user$ = authState(this.auth); // observable of the current user

  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
