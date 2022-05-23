import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss'],
})
export class UpdateDoctorComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  doctorForm = this.fb.group({
    id: [''],
    name: [''],
    age: [''],
    gender: [''],
    specialization: [''],
  });
  ngOnInit(): void {}
}
