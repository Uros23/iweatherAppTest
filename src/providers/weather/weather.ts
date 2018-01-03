import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class WeatherProvider {
 apiKey = '8da2586b4ee7c148';
 url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather( state:string, city:string){
      return this.http.get(this.url + '/' + state  + '/' + city + '.json').map(res => res.json());
  }
}
