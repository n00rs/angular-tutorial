import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterOutlet, RouterModule
  ]
})
export class EmployeeModule { 
  ngOnInIt(){
    console.log('lllllllllllllllllll');
    
  }
}
