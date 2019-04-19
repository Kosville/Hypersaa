interface RootObject {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}
interface ListItem {
  dt: number;
  main: Main;
  weather: WeatherItem[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}
interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Clouds {
  all: number;
}
interface Wind {
  speed: number;
  deg: number;
}
interface Sys {
  pod: string;
}
interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
}
interface Coord {
  lat: number;
  lon: number;
}
