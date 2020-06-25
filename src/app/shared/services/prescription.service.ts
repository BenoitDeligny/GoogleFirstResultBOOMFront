import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prescription } from '../classes/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  URL = 'http://192.168.1.77:8080/prescriptions';

  constructor(private http: HttpClient) { }

  savePrescription(prescription) {
    return this.http.post<Prescription>(this.URL, prescription);
  }
}
