import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  URL = 'https://bordeaux-gfr-hack.javarover.wilders.dev/users';

  constructor(private http: HttpClient) { }

  getPatient(lastname) {
    return this.http.get(this.URL, { params: lastname });
  }
}
