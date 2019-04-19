import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject, Clouds, Coord, WeatherItem, Wind, Sys, Main } from './weather';
import { AppData } from './AppData';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hypersaa';
  Cloud: Clouds;
  Coords: Coord;
  weather: WeatherItem;
  winds: Wind;
  system: Sys;
  mains: Main;
  CurrentW;
  Root: RootObject;
  weatherImgUrl;
  temperature;
  WeatherObservable: Observable<any[]>;
  city : string='Helsinki';
  loaded: boolean = false;
  lastCity:string = '';

  constructor(private dataService: WeatherDataService) {
  }

  getPosts(): void {
    this.dataService.getCurrent(this.city).subscribe((res: any) => {
      this.Root = res;
      this.Cloud = res.clouds;
      this.Coords = res.coord;
      this.weather = res.weather[0];
      this.winds = res.wind;
      this.mains = res.main;
      this.system = res.sys;
      this.temperature=Math.round(this.mains.temp-272);
      this.loaded=true;
      this.lastCity = this.city;
      console.log("getPosts called with city: " + this.city)
    });  
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
