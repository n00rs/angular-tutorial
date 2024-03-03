import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
ngOnInit() {
    console.log('hi from ngOnInit');
  }
  fruits: IoFruitObj[] = [
    { name: 'orange', price: 100 },
    { name: 'grape', price: 500 },
    { name: 'anar', price: 600 },
    { name: 'carrot', price: 700 },
    { name: 'pappya', price: 800 },
    { name: 'apple', price: 900 }
  ];

  trackByFn(index: number, item: IoFruitObj) {
    console.log({ index, item });

    return item.name;
  }
}
interface IoFruitObj {
  name: string;
  price: number;
}
