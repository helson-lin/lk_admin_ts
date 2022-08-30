import { AxiosRequestConfig, AxiosInstance } from 'axios'
declare interface CustomReponse<T> {
    code: number;
    message?: string;
    data?: T | any;
}
