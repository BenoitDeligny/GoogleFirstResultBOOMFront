import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/shared/classes/drug';
import { User } from 'src/app/shared/classes/user';
import { Prescription } from 'src/app/shared/classes/prescription';
import { PatientService } from 'src/app/shared/services/patient.service';
import { PrescriptionService } from 'src/app/shared/services/prescription.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  drugsArray: Drug[] = [];

  genre: string;

  newDrug: Drug = new Drug();

  user: User = new User();

  realUser: User;

  submitted = false;

  constructor(public patientService: PatientService, public prescriptionService: PrescriptionService) { }

  ngOnInit(): void {

  }

  addNewDrug() {
    this.drugsArray.push(this.newDrug);
    this.newDrug = new Drug();
  }

  createPrescription() {
    this.patientService.getPatient(this.user.lastname).subscribe(e => {
      this.realUser = e[0];
      const date = new Date();
      const prescription = new Prescription('Dr.Wild', date, this.realUser, this.drugsArray);
      this.prescriptionService.savePrescription(prescription).subscribe();
      this.submitted = true;
    });

  }

}


