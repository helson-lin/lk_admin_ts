import { AxiosRequestConfig } from 'axios'
import axios from './http'
import apiList, { apiKeyType, apiKeyDataType } from './api'
/*
限制泛型T必须是接口列表（apiKeyType）中的key
限制obj中的url必须是接口列表中key的某一格
*/
export default async <T extends apiKeyType>(
    obj: AxiosRequestConfig & { url: T }
): Promise<any> => {
    /*
    限制最终的返回数据类型
    */
    return await new Promise<apiKeyDataType[T]>((resolve, reject) => {
        /*
        传递泛型给http中的拦截器
        */
        axios<apiKeyDataType[T]>({
            url: apiList[obj.url],
            data: obj.data || {},
            method: obj.method ?? 'GET',
            responseType: obj.responseType ?? 'json',
        })
            .then((res: any) => {
                resolve(res.data)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}
