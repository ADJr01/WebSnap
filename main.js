import Snap from "./SnapIgnite/Snap.js";
window.addEventListener('DOMContentLoaded',_=>{
       const snap =  new Snap({container:'root'});
       const container = document.getElementById('root');
       const btn = document.getElementById('appender');
       btn.addEventListener('click',()=>{
              const new_el = document.createElement('div');
              new_el.classList.add('item_snap');
              new_el.textContent = 'New Element';
              container.appendChild(new_el);
       })
});