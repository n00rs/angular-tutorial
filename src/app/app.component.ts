import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit() {
    console.log('hi from ngOnInit');

  }

  public count = 0;
  public strOddOrEven = "Even"
  blnHidden = true;
  clear() {
    this.count = 0;
    this.strOddOrEven = "Even"
    this.blnHidden = true;
  }
  doCheckOddEven(num: number) {
    this.blnHidden = false;
    this.strOddOrEven = num % 2 !== 0 ? "ODD" : "EVEN";
    return num % 2 !== 0 ? "ODD" : "EVEN";
  }
  onChange() {
    this.strOddOrEven = this.count % 2 !== 0 ? "ODD" : "EVEN";
  }
}
