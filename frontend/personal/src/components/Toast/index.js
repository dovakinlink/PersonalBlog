import React from 'react';
import './style.less';

const ICONS = {
  success:"anticon-check-circle-o",
  error:"anticon-cross-circle-o",
  info:"anticon-info-circle-o",
  warning:"anticon-exclamation-circle-o"
}

function toastContainer (){
  const rootId = 'toast-root';
  let toastRootDom = document.querySelector(`#${rootId}`);
  if(toastRootDom === null){
    toastRootDom = document.createElement('div');
    toastRootDom.id = rootId;   

    toastRootDom.addEventListener('click',hideToast,false);

    document.body.appendChild(toastRootDom);
  }
  return toastRootDom;
}

function hideToast(delay=0){
  setTimeout( e =>{
    toastContainer().classList.remove('flex','fadeInUp');
  },delay);
}

let hideTimer;
function showToast( message="", { timeout=2500, type} ){
  if(hideTimer){
    clearTimeout(hideTimer);
  }
  const toastDom = toastContainer();
  toastDom.innerHTML = `
    <div class="toast-box">
      ${ type ? `<i class="anticon ${ICONS[type]} ant-notification-notice-icon ant-notification-notice-icon-${type}"></i>` : ''}
      ${message}
    </div>`;
  toastDom.classList.add('flex');
  setTimeout( e => toastDom.classList.add('fadeInUp'),50);
  hideTimer = setTimeout(hideToast,timeout)
}

export default {
  show( message, options = {}){
    showToast(message,options)
  },
}

