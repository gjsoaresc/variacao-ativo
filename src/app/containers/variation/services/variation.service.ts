import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { variationHandler } from './variation.handler';

@Injectable({
  providedIn: 'root'
})
export class VariationService {
  private apiUrl = '/api';

  constructor(
    private http: HttpClient
  ) { }

  getChart(active: string) {
    const period1 = Math.floor(new Date().getTime() / 1000) - 2592000;
    const period2 = Math.floor(new Date().getTime() / 1000);
    const apiUrl = `${this.apiUrl}/${active}?period1=${period1}&period2=${period2}&interval=1d`;

    return this.http.get(apiUrl)
      .pipe(map(variationHandler));
  }
}
