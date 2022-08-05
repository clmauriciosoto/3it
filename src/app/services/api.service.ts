import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/';
  apikey = 'apikey=2b62b7dad40e9f83815d13860041db2b638729a6';

  constructor(private http: HttpClient) {}

  getUrl(endpoint: string) {
    return `${this.base_url}${endpoint}?${this.apikey}&formato=json`;
  }
  /*Entrega un archivo en formato JSON con el valor del recurso para las fechas indicadas
  El día de la fecha inicial es la que va después del parámetro /dias_i/ y el día final, es el que se indica tras el parámetro /dias_f/.*/
  lastThirtyDaysData(resource: string) {
    const now = new Date();
    now.setHours(0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0);

    const thirtyDay = new Date(now.setDate(now.getDate() - 29));
    thirtyDay.setHours(0, 0, 0);
    const firstDate = `${thirtyDay.getFullYear()}/${
      thirtyDay.getMonth() + 1
    }/dias_i/${thirtyDay.getDate()}`;

    const secondDate = `${today.getFullYear()}/${
      today.getMonth() + 1
    }/dias_f/${today.getDate()}`;

    const endpoint = `${resource}/periodo/${firstDate}/${secondDate}`;
    return this.http.get(this.getUrl(endpoint));
  }

  resourceByCurrentYear(resource: string) {
    const now = new Date();
    const year = now.getFullYear();
    const endpoint = `${resource}/${year}`;
    return this.http.get(this.getUrl(endpoint));
  }
}
