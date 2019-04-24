import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  baseUrl:string = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/";
  appId:string ="&APPID=8b3f57166494afb2451296e6f254bed1";
  


  constructor(private httpClient : HttpClient) { }
  getCurrent(city){
    return this.httpClient.get(this.baseUrl + "weather?q=" + city + this.appId);
  }
  getForecast(city){
    return this.httpClient.get(this.baseUrl + "forecast?q=" + city + this.appId);
  }
}
