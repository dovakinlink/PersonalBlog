export function getCookie(name){
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr){
        return decodeURIComponent(arr[2]);
    } else {
        return null;
    }
}

export function setCookie(name, value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString(); 
}

export function delCookie(name) {
    if (getCookie(name)){
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = getCookie(name);
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
}