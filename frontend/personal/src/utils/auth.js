export function getAuthHeader(token){
    return(
        {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json,application/x-www-form-urlencoded,multipart/form-data',
            'Access-Control-Allow-Origin':'*'
        }
    )
}