import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  URL = 'http://192.168.1.77:8080/users';

  constructor(private http: HttpClient) { }

  getPatient(lastname) {
    return this.http.get(this.URL, { params: lastname });
  }
}
