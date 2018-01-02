
function isArray(o) {
    return o instanceof Array
  }
  
  function isObject(o) {
    return o instanceof Object
  }
  
  function isFormData(o){
    return o instanceof FormData
  }
  function isFile(o){
    return o instanceof File
  }
  
  function isMoment(o){
    return o instanceof moment
  }
  
  function isString(o){
    return typeof o === 'string'
  }
  
  // let regex = /^\s*|\s*$|^(null|undefined)/g
  
  function isMatch(o,regex){
    return o.match(regex) && o.match(regex).length > 0
  }
  
  function isBigNumber(o){
    return o >= 2 ** 53 || o <= -(2 ** 53)
  }
  
  function objStrip(obj,regex=/^\s*|\s*$/g){
    if(isArray(obj)){
      return obj.map(o=>{
        if ((isObject(o) || isArray(o)) && !isFile(o) && !isMoment(o)) {
          return objStrip( o);
        }
        else if (isString(o) && isMatch(o,regex)) {
          return o.replace(regex,"").replace(/^null$/g,"").replace(/^undefined$/g,"");
        }else if(isMoment(o)){
          return  o.format('YYYY-MM-DD HH:mm:ss')
        }
        return o;
      })
    }else{
      const {keys} = Object
      let objKeys = keys(obj)
      objKeys.forEach(key=>{
        let o = obj[key]
        if ((isObject(o) || isArray(o)) && !isFile(o) && !isMoment(o)) {
          obj[key] = objStrip( o);
        }
        else if (isString(o) && isMatch(o,regex)) {
          obj[key] =  o.replace(regex,"").replace(/^null$/g,"").replace(/^undefined$/g,"");
        }else if(isMoment(o)){
          obj[key] = o.format('YYYY-MM-DD HH:mm:ss')
        }else{
          obj[key] = o
        }
      })
      return obj
    }
  }
  
  function formDataStrip(formData,regex=/^\s*|\s*$/g){
    let entries= new FormData();
    if ( formData && ( typeof formData === "object" || formData.nodeName === "FORM" )) {
      for (const [key, value] of formData) {
        let fixValue
        if(isString(value)){
          fixValue = value.replace(regex,"").replace(/^null$/g,"").replace(/^undefined$/g,"");
        }else fixValue = value
        entries.append(key,fixValue)
      }
    } else {
      throw new Error("Invalid format, expected form or formdata as param");
    }
  
    return entries;
  }
  
  
  import objectToFormData from 'object-to-formdata'
  
  
  export default {
    isMatch,
    isString,
    isArray,
    isFile,
    isFormData,
    isMoment,
    objStrip,
    formDataStrip,
    objectToFormData,
    isBigNumber
  }
  