import {dom_helper,utility_helper} from '../Utility/helper/'
import ClassList from "./src/styleController/classList.js";
import SyncWave from "../SyncWave/index.js";
export default class Snom extends SyncWave{

    constructor(element) {
        super();
        if(!dom_helper.isDomInstance(element)) throw new Error('Snap snom creation failed');
        this.snom_element = element;
        const unique_id = utility_helper.uID();
        this.snom_element.setAttribute('qualified_snom',true);
        this.snom_element.setAttribute('snom_identity',unique_id);
        const details = {
            snom:this,
            snom_identity: unique_id
        }
        this.call(SyncWave.EVENTS.onSnomCreate,details);
    }

    get css(){
        return {
            classList: new ClassList(this.snom_element)
        }
    }

    get self__boundingRect__(){
        return this.snom_element.getBoundingClientRect();
    }

    get width(){
        return this.self__boundingRect__.width;
    }
    get height(){
        return this.self__boundingRect__.height;
    }

    get top(){
        return this.self__boundingRect__.top;
    }

    get left(){
        return this.self__boundingRect__.left;
    }
    get right(){
        return this.self__boundingRect__.right;
    }

    get bottom(){
        return this.self__boundingRect__.bottom;
    }



    get snom(){
        return this.snom_element;
    }
}