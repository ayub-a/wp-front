import { AxiosResponse } from 'axios'

export function errorHandler<T>(response: AxiosResponse<T, any>) {
  if (response.status !== 200) return response.statusText
}
