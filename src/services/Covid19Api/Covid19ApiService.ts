import { COVID19_API_BASE_URL } from '@/constants/environment'
import { Logger } from '@/utils/Logger'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export abstract class Covid19ApiService {
  protected abstract uri: string
  protected instance: AxiosInstance = axios.create()

  constructor () {
    this.createAxiosInstance()
    this.setInstanceInterceptors()
  }

  private createAxiosInstance (): void {
    this.instance = axios.create({
      baseURL: COVID19_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  private onRequestInterceptor (config: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...config,
      headers: {
        'X-Access-Token': ''
      }
    }
  }

  private onRequestErrorInterceptor (error: AxiosError): Promise<AxiosError> {
    Logger.error('Covid19ApiService@requestError', error)
    return Promise.reject(error)
  }

  private onResponseInterceptor (response: AxiosResponse): AxiosResponse {
    return response
  }

  private onResponseErrorInterceptor (error: AxiosError): Promise<AxiosError> {
    Logger.error('Covid19ApiService@responseError', error)
    return Promise.reject(error)
  }

  private setInstanceInterceptors (): void {
    this.instance.interceptors.request.use(this.onRequestInterceptor, this.onRequestErrorInterceptor)
    this.instance.interceptors.response.use(this.onResponseInterceptor, this.onResponseErrorInterceptor)
  }
}
