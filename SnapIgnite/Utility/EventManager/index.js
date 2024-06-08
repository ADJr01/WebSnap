import {valid_events} from "./EventArchieve.js";

export default class EventManager{

    constructor() {
        this.snapEventList = Object.keys(valid_events).map(key=>valid_events[key]);

    }

    register(element,event,func){
        if(!event in this.snapEventList)return false;
    }
}

/*
const customEvent = new CustomEvent('myCustomEvent', {
  detail: { message: 'Hello, world!', timestamp: Date.now() }
});

// Dispatch the custom event
document.dispatchEvent(customEvent);
* */