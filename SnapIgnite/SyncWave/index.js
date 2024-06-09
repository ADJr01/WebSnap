import {valid_events} from "./SyncArchieve.js";

export default class SyncWave extends EventTarget{

    constructor() {
        super();
        this.snapEventList = Object.keys(valid_events).map(key=>valid_events[key]);

    }

    static get EVENTS(){
        return valid_events;
    }

    register(event,onEvent){
        if(!event in this.snapEventList || typeof onEvent!=='function')throw new Error('Invalid event registration detected');
        this.addEventListener(event,onEvent)
    }

    call(event,detail){
        this.dispatchEvent(new CustomEvent(event,detail))
    }

    remove(event,onEvent){
        this.removeEventListener(event,onEvent);
    }


}

