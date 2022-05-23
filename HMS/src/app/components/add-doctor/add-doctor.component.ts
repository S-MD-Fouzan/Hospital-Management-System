import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent implements OnInit {
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  doctorForm = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    specialization: ['', [Validators.required]],
  });
  onSubmit() {
    if (this.doctorForm.valid) {
      this.loading = true;
      this.doctorService.addDoctor(this.doctorForm.value).subscribe((data) => {
        console.log('Succesfully added');
        this.loading = false;
        this.router.navigate(['/home']);
      });
    }
  }
  ngOnInit(): void {
    this.loading = false;
  }
}
