import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  names: string[];
  content: string
  constructor() {
    this.names = ['Home', 'Gallery', 'Help', 'About', 'Contact Us', 'feedBack']
    this.content = 'This is an content to be displayed'
    
  }
  ngOnInit() { }
}
