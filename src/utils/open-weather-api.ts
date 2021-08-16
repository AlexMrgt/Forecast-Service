import axios, { AxiosInstance } from "axios";
import {
  OPEN_WEATHER_API_KEY
} from './constants';


class ForecastApi {

  client: AxiosInstance;
  apiKey: string;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      responseType: 'json',
    });

    this.apiKey = OPEN_WEATHER_API_KEY;
  }

  async getCurrentForecastByCoords(latitude:number, longitude:number) {

    const res = await this.client.get('/onecall', {
      params: {
        lat: latitude,
        lon: longitude,
        exclude: 'minutely,hourly,daily,alerts',
        appid: this.apiKey
      }
    });

    return res.data;
  }


  async getWeekForecastByCoords(latitude:number, longitude:number){
    const res = await this.client.get('/onecall', {
      params: {
        lat: latitude,
        lon: longitude,
        exclude: 'current,minutely,hourly,alerts',
        appid: this.apiKey
      }
    });
    return res.data;
  }

}

export default ForecastApi;
