import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostServerService } from '../post-server.service';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  constructor(private postEmp: PostServerService) { }
  ngOnInIt() {
    console.log('Load in Home1Component');
  }
  data = {
    strFirstName: 'hello ',
    strLastName: 'world ',
    intAge: 25,
    dblSalary: 250000
  };
  onSubmit() {
    console.log('onSubmit', this.data);
    this.postEmp.saveEmployee({ data: this.data, url: "http://localhost:5000/api/post" }).
      subscribe(res => {
        console.log(res);
      });


  }
}
