import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import {Weather, WeatherServerResponse} from './Weather';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  zip!: string;
  selectedWeather?: Observable<Weather>;
  // weatherSubscription?: Subscription;

  // constructor(private httpClient: HttpClient) {}
  constructor(private weatherService: WeatherService){}


  zipChanged() {
    console.log(`zip changed to ${this.zip}`);

    if (this.zip.length !== 5) {
      return;
    }
    // const theWeather =(weather as any)[this.zip];
    // this.selectedWeather = {
    //   place: theWeather.name,
    //   icon: `https://openweathermap.org/img/w/${theWeather.weather[0].icon}.png`,
    //   details: `${theWeather.weather[0].description} and ${theWeather.main.temp}`
    // }
    // const appId = '79f211f07776dd32c7db070614df9b06';
    // this.weatherSubscription =
    // this.selectedWeather= this.httpClient.get<WeatherServerResponse>(`https://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&appid=${appId}&units=imperial`)
    // .pipe(map(data=>{
    //     return{
    //       place: data.name,
    //       icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    //       details: `${data.weather[0].description} and ${data.main.temp}`
    //     }
    //   })
    // )  
    // .subscribe(weather => {
    //     this.selectedWeather = weather;
    //   })
    this.selectedWeather = this.weatherService.getWeather(this.zip);

  }
  // ngOnDestroy(): void {
  //     this.weatherSubscription?.unsubscribe();
  // }
}
