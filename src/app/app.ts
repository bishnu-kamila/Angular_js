import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sign } from 'crypto';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'basic-app';
  name = 'Bishnupada Kamila';
  
}
