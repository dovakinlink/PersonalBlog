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