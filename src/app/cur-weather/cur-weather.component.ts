import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RootObject, Clouds, Coord, WeatherItem, Wind, Sys, Main } from '../weather';
import { WeatherDataService } from '../weather-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cur-weather',
  templateUrl: './cur-weather.component.html',
  styleUrls: ['./cur-weather.component.css']
})
export class CurWeatherComponent implements OnInit, OnChanges {
  
  @Input() city: string;

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
  loaded: boolean = false;

  constructor(private dataService: WeatherDataService) {
    
   }
   public getPosts(): void {
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
      console.log("getPosts called with city: " + this.city)
    });  
  }
  ngOnInit() {
    this.getPosts();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getPosts();
  }
}
