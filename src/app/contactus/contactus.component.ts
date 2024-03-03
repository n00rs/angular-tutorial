import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor() { }
  ngOnInit() {

  }
  data = {
    firstName:"",
    lastName:"",
    phone:"",
    email:""
  }
  onsubmit(){
alert(JSON.stringify(this.data))
  }
}
