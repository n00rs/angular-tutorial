import { CommonModule } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
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
  menuClickHandler = ({ menuName }: { menuName: string }) => alert(`Clicked On ${menuName}`)
  ngOnInit() { }
}
