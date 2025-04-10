import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Email } from '../Email/email.models'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  emailvett:Email[] = [];
    invia(email: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement): boolean {
      console.log(email.value, oggetto.value,testo.value)
      this.emailvett.push(new Email (email.value, oggetto.value,testo.value));
    return false;
    }
  
}
