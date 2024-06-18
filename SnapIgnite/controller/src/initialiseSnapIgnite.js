import SyncWave from "../../SyncWave/index.js";
import Query from "./Query.js";


export default function (observer){
    Query();
    const appendChild  = HTMLElement.prototype.appendChild;
    const removeChild = HTMLElement.prototype.removeChild;
    //modify default functionality of HTML Element;
    HTMLElement.prototype.appendChild =  function (child){
        const isSnom = this.getAttribute('qualified_snom');
        const snom_id = this.getAttribute('snom_identity');
        if(!isSnom)return appendChild.call(this,child);
        observer.raise(SyncWave.EVENTS.onNewElementInContainer,
            {detail:{
                    parent_snom_identity:snom_id,
                    snom_element: child
                    //..others
                }}
                );
        appendChild.call(this,child);
    }
}