import { Component } from '@angular/core';

@Component({
  selector: 'app-emp1',
  standalone: true,
  imports: [],
  templateUrl: './emp1.component.html',
  styleUrl: './emp1.component.css'
})
export class Emp1Component {
ngOnInIt(){
  console.log('init=======>');
  
}
}
