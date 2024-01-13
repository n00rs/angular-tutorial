import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    let user: object
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {

        user = data
        this.users = user
      })

  }
}