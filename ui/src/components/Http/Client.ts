import axios, {
  AxiosDefaults,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";

export interface Client {
  defaults?: AxiosDefaults<any>;
  interceptors?: { request: AxiosInterceptorManager<AxiosRequestConfig<any>>; response: AxiosInterceptorManager<AxiosResponse<any, any>>; };
  
  delete?<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  
  get?<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  
  getUri?(config?: AxiosRequestConfig): string
  
  head?<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  
  options?<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  
  patch?<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  
  patchForm?<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  
  post?<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  
  postForm?<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  
  put?<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  
  putForm?<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  
  request?<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
  
}

export class ClientImpl implements Client {
  private config: AxiosRequestConfig<any>
  private login: boolean
  
  constructor(config: AxiosRequestConfig) {
    this.config = config;
    this.login = false
  }
  
  loginChecked = (state: boolean) => {
    this.login = state
  }
  
  getLoginState = (): boolean => {
    return this.login;
  }
  
  get = <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> => {
    return axios.get(this.config.baseURL + url, config ? config : this.config)
  }
  
  post = <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> => {
    return axios.post(this.config.baseURL + url, data, config ? config : this.config)
  }
}