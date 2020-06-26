import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/shared/classes/drug';
import { User } from 'src/app/shared/classes/user';
import { Prescription } from 'src/app/shared/classes/prescription';
import { PatientService } from 'src/app/shared/services/patient.service';
import { PrescriptionService } from 'src/app/shared/services/prescription.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public patientService: PatientService, public prescriptionService: PrescriptionService) { }

  drugsArray: Drug[] = [];

  genre: string;

  newDrug: Drug = new Drug();

  user: User = new User();

  realUser: User;

  submitted = false;

  momentTemporary: string[] = [];

  momentsList: string[] = ['Matin', 'Midi', 'Soir', 'Au réveil', 'Avant de se coucher'];

  ngOnInit(): void {
  }

  addNewDrug() {
    this.drugsArray.push(this.newDrug);
    this.newDrug = new Drug();
  }

  addMoment(value) {
    this.newDrug.moments.push(value);
  }

  createPrescription() {
    this.patientService.getPatient(this.user.lastname).subscribe(e => {
      this.realUser = e[0];
      const date = new Date();
      const prescription = new Prescription('Dr.Wild', date, this.realUser, this.drugsArray);
      this.prescriptionService.savePrescription(prescription).subscribe();
      this.submitted = true;
      console.log(prescription);
    });
  }

  initialize() {
    this.submitted = false;
    this.drugsArray = [];

  }

}


