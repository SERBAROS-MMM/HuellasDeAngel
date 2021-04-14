import axios from 'axios'
import {HTTP_CONSTANTS} from './http-constants'

const headersConfig=()=>{
    const defaultHeaders={
        'Content-Type':'application/json',
        'x-access-token': sessionStorage.getItem('_TOKEN_'),
        Accept:'application/json'
    }
    return defaultHeaders
}

export const requestHttp=async(
    method='post',
    endPoint,
    requestData={},
    params={}
)=>{
    //try {
        const url=HTTP_CONSTANTS.url+endPoint
        const options={
            method,
            url,
            data: requestData,
            params,
            headers: headersConfig()
        }

        const response=await axios(options)
        const {data}=response
        return data
    //} catch (error) {
     //   throw error
    //}
}

export const requestHttpFile=async(
    method='post',
    endPoint,
    requestData={}
)=>{
    //try {
        const url=HTTP_CONSTANTS.urlUp+endPoint
        const options={
            method,
            url,
            data: requestData,
        }

        const response=await axios(options)
        const {data}=response
        return data
    //} catch (error) {
      //  throw error
   // }
}