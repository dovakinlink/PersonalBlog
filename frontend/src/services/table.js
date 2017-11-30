import { config, get } from 'utils'

export async function query (params) {
  return get(`${config.api}tables`, params)
}
