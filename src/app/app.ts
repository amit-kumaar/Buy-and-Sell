import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Auth, authState, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AsyncPipe, NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, NgIf, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('buy-and-sell');
  
  user$;

  constructor(protected auth:Auth){
    this.user$ = authState(this.auth);
    console.log('App component created');
    console.log('Auth instance:', this.auth);
  }

  signInClicked():void{
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  signOutClicked():void{
    this.auth.signOut();
  }
}
