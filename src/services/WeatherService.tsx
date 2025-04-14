import { AxiosResponse } from 'axios';
import { Weather } from '../store/types';
import api from '../axios';

export class WeatherService {
    static async getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`);
    }
}