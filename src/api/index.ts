import Taro from '@tarojs/taro'

type methodType =  "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
interface RequestArgs  {
    url:string,
    data: string| object,
    method?: methodType
}
// 请求的域名:端口
let baseUrl = "http://localhost:3001";
// 请求拦截器，在请求之前做些什么吧
const httpRequest = async function(obj: RequestArgs) {
    const interceptor = function (chain) {
        const requestParams = chain.requestParams
        const { method, data, url } = requestParams
        console.log(`http ${method || 'GET'} --> ${url} data: `, data)
        return chain.proceed(requestParams)
          .then(res => {
            console.log(`http <-- ${url} result:`, res)
            return res
          })
      }
      
    await Taro.addInterceptor(interceptor)
    return await Taro.request(obj)
}

// test 请求
export async function test(){
    let params = {
        url: baseUrl + '/api/queryUsers',
        data: {},
        method: "POST",
      } as any;
    let result = await httpRequest(params)
    return result.data;  
}