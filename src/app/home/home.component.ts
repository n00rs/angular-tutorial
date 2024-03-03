import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router,private getApi: ApicallService) {

  }

  public arrPhotos:any[] = [];
  ngOnInit() {
    this.getApi.get('https://jsonplaceholder.typicode.com/photos').subscribe(res => {
      console.log(res);
      this.arrPhotos = res;
    });
  }
  goToContact() {
    this.router.navigate(['contact-us']);
  }
}
