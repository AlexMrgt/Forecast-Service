
import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  OPEN_WEATHER_API_KEY
} from './constants';
import { Direction } from "./interfaces";

class GeoApi {

  client: AxiosInstance;
  apiKey: string;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      responseType: 'json',
    });

    this.apiKey = OPEN_WEATHER_API_KEY;
  }


  async getPlaceCoordsByName(name: string) {

    const res: AxiosResponse<Direction[]> = await this.client.get('/direct', {
      params: {
        q: name,
        limit: 5,
        appid: this.apiKey,
      }
    });
    return res.data;
  }

  async getPlaceNameByCoords(lat: number, lon: number) {
    const res: AxiosResponse<Direction[]> = await this.client.get('/reverse', {
      params: {
        lat,
        lon,
        limit: 1,
        appid: this.apiKey,
      }
    });
    return res.data;
  }
}

export default GeoApi;
