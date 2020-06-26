import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prescription } from '../classes/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  URL = 'https://bordeaux-gfr-hack.javarover.wilders.dev/prescriptions';

  constructor(private http: HttpClient) { }

  savePrescription(prescription) {
    return this.http.post<Prescription>(this.URL, prescription);
  }
}
