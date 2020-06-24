import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/shared/classes/drug';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  drugsArray: Drug[] = [];
  newDrug: Drug;
  name: string;
  test: string;

  constructor() { }

  ngOnInit(): void {
    this.drugsArray.push(this.newDrug);
  }

  addNewDrug() {

  }

  onSubmit() {
  }
}
