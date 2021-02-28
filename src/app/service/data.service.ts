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
  getMailDataPrimary() {
    return this.http.get<MailData[]>(this.API_BASE_URL + "/mails");
  }
  readMailDataPrimary(id: number) {
    return this.http.put(this.API_BASE_URL + "/mails/" + id, { isread: true });
  }
  clickReadPrimary(id: number) {
    return this.http.put(this.API_BASE_URL + "/mails/" + id, { isstared: true });
  }
  deleteMailDataPrimary(id: number) {
    return this.http.delete(this.API_BASE_URL + "/mails/" + id);
  }

  getMailDataSocial() {
    return this.http.get<MailData[]>(this.API_BASE_URL + "/social");
  }
  readMailDataSocial(id: number) {
    return this.http.put(this.API_BASE_URL + "/social/" + id, { isread: true });
  }
  clickReadSocial(id: number) {
    return this.http.put(this.API_BASE_URL + "/social/" + id, { isstared: true });
  }
  deleteMailDataSocial(id: number) {
    return this.http.delete(this.API_BASE_URL + "/social/" + id);
  }

  getMailDataPromotion() {
    return this.http.get<MailData[]>(this.API_BASE_URL + "/promotion");
  }
  readMailDataPromotion(id: number) {
    return this.http.put(this.API_BASE_URL + "/promotion/" + id, { isread: true });
  }
  clickReadPromotion(id: number) {
    return this.http.put(this.API_BASE_URL + "/promotion/" + id, { isstared: true });
  }
  deleteMailDataPromotion(id: number) {
    return this.http.delete(this.API_BASE_URL + "/promotion/" + id);
  }
}
