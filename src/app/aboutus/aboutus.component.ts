import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(private fb: FormBuilder) {

  }
  submit = false
  registraionForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    phone: ["", [Validators.required,Validators.pattern('[0-9]{10}')]],
    email: ["", [Validators.required,Validators.email]]
  });

  get formContols() {
    return this.registraionForm.controls;
  }
  onsubmit() {
    this.submit = true
    console.log('hello from ====>',this.formContols);
    
  }
}
