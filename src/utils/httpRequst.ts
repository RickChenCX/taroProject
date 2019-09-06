// import axios, {AxiosResponse} from "axios";
import Taro from '@tarojs/taro'
// export let instance = axios.create({
//     baseURL: "http://localhost:3001",
//     timeout: 10000,
//   });

// axios request 拦截

// instance.interceptors.request.use( (config) => {
//     // Do something before request is sent
//     return config;
//   },(error) => {
//     // Do something with request error
//     return Promise.reject(error);
// })

// // axios response 拦截
// instance.interceptors.response.use( (response) => {
//     // Do something with response data
//     return response;
//   }, (error) => {
//     // Do something with response error
//     return Promise.reject(error);
//   });

  /**
 * 封装get请求
 * @param url
 * @param params
 * @returns (Promise)
 */

export function fetch(url: string, params: Object | String ) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        data: params,
        method: "GET",
        header: {
            'content-type': 'application/json'
        }
      }).then( res => {
          console.log(res.data);
          resolve(res);
      }).catch(e => {
          reject(e)
      })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns (Promise)
 */

export  function post(url: string, data:  Object | String ) {
    return new Promise((resolve, reject) => {
        Taro.request({
            url,
            data,
            method: "POST",
            header: {
                'content-type': 'application/json'
            }
          }).then( res => {
              console.log(res.data);
              resolve(res);
          }).catch(e => {
              reject(e)
          })
        })
}