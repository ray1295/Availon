import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Locator } from 'protractor';

interface Location {
  latitude: string; 
  longitude: string;
  country_name: string; 
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('https://ipapi.co/json/');
  }
}
