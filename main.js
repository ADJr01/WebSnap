import Snap from "./SnapIgnite/Snap.js";
window.addEventListener('DOMContentLoaded',_=>{
       let total_element = 1;
       const snap =  new Snap({container:'root',allowNestedSnap: false});
       const container = document.getElementById('root');
       const btn = document.getElementById('appender');
       btn.addEventListener('click',()=>{
              snap.createChild(`<div class="item_snap">Item ${total_element++}</div>
              `)
              // const new_el = document.createElement('div');
              // new_el.classList.add('item_snap');
              // new_el.textContent = 'New Element';
              // container.appendChild(new_el);
       })
});