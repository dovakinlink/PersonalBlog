import { request } from 'utils'

export async function regist(params){
    return request({
        url: '/api/admin/users',
        method: 'post',
        data: {
            ...params
        }
    })
}

export async function query(params){
    return request({
        url: '/api/admin/users.json',
        method: 'get',
        data: {
            ...params
        }
    })
}

export async function destroy (params) {
    return request({
      url: `/api/admin/users/${params.id}`,
      method: 'delete',
      data: {
        ...params
      }
    })
}