import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private router: Router
  ) {}
  doctors: Doctor[];
  loading: boolean;
  patientForm = this.fb.group({
    name: ['', Validators.required],
    doctor: ['', Validators.required],
    prescription: [''],
  });
  onSubmit() {
    if (this.patientForm.valid) {
      this.loading = true;
      this.patientService
        .addPatients(this.patientForm.value)
        .subscribe((data) => {
          console.log('Sucessfully Added');
          this.loading = false;
          this.router.navigate(['/home']);
        });
    }
  }
  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
      this.patientForm.controls.doctor.setValue(this.doctors[0]);
    });
    this.loading = false;
  }
}
