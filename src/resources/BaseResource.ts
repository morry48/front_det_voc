

import axios, { type AxiosRequestConfig } from "axios";

type ParamsType = {
  [key: string]: any
}

// Ginの関係で末尾に / をつける必要があるため
type EndPointType = `${string}/`

class BaseResource {
  // Todo:一旦仮置き
  baseUrl: string
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL
  }

  async get<T>(endPoint: EndPointType, option?: AxiosRequestConfig) {
    const url = this.getUrl(endPoint)
    const response = await axios.get<T>(url, option)

    return response.data
  }

  async post(endPoint: EndPointType, params: ParamsType) {
    const url = this.getUrl(endPoint)
    const response = await axios.post(url, params)

    return response.data
  }

  private getUrl = (url: EndPointType) => {
    return `${this.baseUrl}${url}`
  }
}

export default BaseResource