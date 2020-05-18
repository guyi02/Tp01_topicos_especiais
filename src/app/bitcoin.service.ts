import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BitcoinResponse } from './models/BitcoinResponse';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  url = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  get(): Observable<BitcoinResponse> {
    return this.http.get<BitcoinResponse>(this.url);
  }
}
