import {valid_events} from "./SyncArchieve.js";

export default class SyncWave extends EventTarget{

    constructor() {
        super();
        this.snapEventList = Object.keys(valid_events).map(key=>valid_events[key]);

    }

    static get EVENTS(){
        return valid_events;
    }

    subscribe(event,onEvent){
        if(!event in this.snapEventList || typeof onEvent!=='function')throw new Error('Invalid event registration detected');
        this.addEventListener(event,onEvent)
    }

    raise(event,detail){
        this.dispatchEvent(new CustomEvent(event,detail))
    }

    unsubscribe(event,onEvent){
        this.removeEventListener(event,onEvent);
    }


}

