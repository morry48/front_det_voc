

import axios from "axios";

type ParamsType = {
  [key: string]: any
}

class BaseResource {
  // Todo:一旦仮置き
  baseUrl: string
  constructor() {
    this.baseUrl = "https://zuic3gnjvq.ap-northeast-1.awsapprunner.com"
  }

  async get<T>(endPoint: string) {
    const url = this.getUrl(endPoint)
    const response = await axios.get<T>(url)

    return response.data
  }

  async post(endPoint: string, params: ParamsType) {
    const url = this.getUrl(endPoint)
    const response = await axios.post(url, params)

    return response.data
  }

  private getUrl = (url: string) => {
    return `${this.baseUrl}${url}`
  }
}

export default BaseResource