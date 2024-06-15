import SyncWave from "../../SyncWave/index.js";


export default function (observer){
    const originalAppendChild  = HTMLElement.prototype.appendChild;
    const originalRemoveChild = HTMLElement.prototype.removeChild;
    //modify default functionality of HTML Element;
    HTMLElement.prototype.appendChild =  function (child){
        const isSnom = this.getAttribute('qualified_snom');
        const snom_id = this.getAttribute('snom_identity');
        if(!isSnom)return originalAppendChild.call(this,child);
        observer.raise(SyncWave.EVENTS.onNewElementInContainer,
            {detail:{
                    snom_identity:snom_id,
                    snom_element: child
                    //..others
                }}
                );



        originalAppendChild.call(this,child);
    }
}