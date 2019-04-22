import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() city:string ='';

  constructor() { }

  // public getPosts(): void {
  //   this.dataService.getCurrent(this.city).subscribe((res: any) => {
  //     this.Root = res;
  //     this.Cloud = res.clouds;
  //     this.Coords = res.coord;
  //     this.weather = res.weather[0];
  //     this.winds = res.wind;
  //     this.mains = res.main;
  //     this.system = res.sys;
  //     this.temperature=Math.round(this.mains.temp-272);
  //     this.loaded=true;
  //     console.log("getPosts called with city: " + this.city)
  //   });  
  // }

  ngOnInit() {
    
  }

}
