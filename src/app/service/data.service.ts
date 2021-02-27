import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MailData } from '../interfaces/mail-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_BASE_URL: string = 'https://603761375435040017722370.mockapi.io/';
  constructor(private http: HttpClient) {

  }
  getMailData() {
    return this.http.get<MailData[]>(this.API_BASE_URL + "/mails");
  }

  deleteMailData(id: number) {
    return this.http.delete(this.API_BASE_URL + "/mails/" + id);
  }
}
