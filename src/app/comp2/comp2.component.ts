import { Component } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  constructor(private serv2: SampleServiceService) { }
  public arrArray2: any[] = [];

  ngOnInit() {
    this.arrArray2 = this.serv2.getArray();
    console.log(this.arrArray2);
    
  }
}
