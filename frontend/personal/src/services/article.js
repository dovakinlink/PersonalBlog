import { request } from 'utils'

export async function create(params){
    return request({
        url: '/api/article/articles',
        method: 'post',
        data: {
            ...params
        }
    })
}

export async function query(params){
    return request({
        url: '/api/article/articles',
        method: 'get',
        data: {
            ...params
        }
    })
}

export async function destroy(params){
    return request({
        url: `/api/article/articles/${params.id}`,
        method: 'delete',
        data: {
          ...params
        }
      })
}