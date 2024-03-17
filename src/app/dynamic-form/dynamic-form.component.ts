import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  constructor(private fb: FormBuilder) {
  }
  get arrAlterNatives() {
    return this.registrationForm.get('arrAlterNatives') as FormArray
  }
  registrationForm = this.fb.group({
    email: ["as", 
    // [Validators.required, Validators.email]
  
  ],
    arrAlterNatives: this.fb.array([])
  });
  addAlterNatives() {
    console.log('add Click', this.arrAlterNatives);
    this.arrAlterNatives.push(this.fb.control(''));    
  }
  onSubmit(values:any){
    console.log(values.value);
    
  }
}
