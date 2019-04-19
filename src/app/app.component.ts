import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject, Clouds, Coord, WeatherItem, Wind, Sys, Main } from './weather';
import { AppData } from './AppData';
import { WeatherDataService } from './weather-data.service';
import { CurWeatherComponent } from './cur-weather/cur-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hypersaa';
  city : string='Helsinki';
  lastCity:string = 'Helsinki';

  constructor( ) {
  }
  callGetPosts(city):void{
    this.lastCity=city;
  }

  ngOnInit(): void {
  
  }
}
