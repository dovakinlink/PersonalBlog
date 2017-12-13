import {get,post} from 'utils';

export async function regist(params){
    return post("/api/admin/users", params);
}

export async function login(params){
    return post("/api/admin/sessions", params);
}