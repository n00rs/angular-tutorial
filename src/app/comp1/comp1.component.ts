import { Component } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  constructor(private serv1: SampleServiceService) { }
 public arrArrayService:any[] = [];
 ngOnInit() {
    this.arrArrayService = this.serv1.getArray();
  console.log(this.arrArrayService);
  
  }
  
}
