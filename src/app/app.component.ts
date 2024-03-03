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
  ngOnInit() {
    console.log('hi from ngOnInit');

  }
  public title = 'TITLE 9898';
  data = { strTech1: 'Angular', strTech2: "Node Js", strPrgrmLanguage: 'Javascript' }
  colorFunc() {
    return 'blue'
  }
  public str = "H";
  functionCall() {
    console.log('HEy functionCall');
    this.str = 'Good Morning'
  }
  functionCall2() {
    console.log('HEy functionCall');
    this.str = 'Good After Noon'
  }
  public count = 0;
  public strOddOrEven = "Even"
  increment() {
    this.count++
    this.strOddOrEven = this.doCheckOddEven(this.count)
  }
  decrement() {
    if (this.count > 0)
      this.count--;
    this.strOddOrEven = this.doCheckOddEven(this.count)
  }
  doCheckOddEven(num: number) {
    return num % 2 !== 0 ? "ODD" : "EVEN";
  }
  onChange() {
    this.strOddOrEven = this.count % 2 !== 0 ? "ODD" : "EVEN";

  }
}
