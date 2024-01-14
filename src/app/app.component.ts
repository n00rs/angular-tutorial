import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'TITLE 9898';
  data = { strTech1: 'Angular', strTech2: "Node Js", strPrgrmLanguage: 'Javascript' }
  colorFunc (){
    return 'blue'
  }
}
