import SyncWave from "../../SyncWave/index.js";
import Query from "./Query.js";
import Controller from "../index.js";

let SHARED_MANAGER_ID=null;
export default function (observer_id){
    Query();
    SHARED_MANAGER_ID = observer_id;
    const appendChild  = HTMLElement.prototype.appendChild;
    const removeChild = HTMLElement.prototype.removeChild;
    //modify default functionality of HTML Element;
    HTMLElement.prototype.appendChild =  function (child){
        const isSnom = this.getAttribute('qualified_snom');
        const snom_id = this.getAttribute('snom_identity');
        if(!isSnom)return appendChild.call(this,child);
        Controller.Observer(SHARED_MANAGER_ID).raise(SyncWave.EVENTS.onNewElementInContainer,
            {detail:{
                    parent_snom_identity:snom_id,
                    snom_element: child
                    //..others
                }}
                );
        appendChild.call(this,child);
    }
}

export function SharedInstance(){
    function Observer(){
        return SHARED_MANAGER_ID;
    }

    return {
        Observer,
    }
}