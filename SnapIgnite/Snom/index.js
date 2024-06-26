import {dom_helper,utility_helper} from '../Utility/helper/'
import ClassList from "./src/styleController/classList.js";
import SyncWave from "../SyncWave/index.js";
import Controller from "../controller/index.js";
import {SharedInstance} from "../controller/src/initialiseSnapIgnite.js";
import StyleSheet from "./src/styleController/styleSheet.js";
export default class Snom{

    constructor(element) {
        if(!dom_helper.isDomInstance(element)) throw new Error('Snap snom creation failed');
        this.snom_element = element;
        this.snom_parent = element.parentNode;
        this.__inline_snom_styles = null;
        const unique_id = utility_helper.uID();
        this.snom_element.setAttribute('qualified_snom',true);
        this.snom_element.setAttribute('snom_identity',unique_id);
        const detail = {
            snom:this,
            snom_identity: unique_id
        }
        Controller.Observer(SharedInstance().Observer()).raise(SyncWave.EVENTS.onSnomCreate,{detail});
    }

    get css(){
        !this.__inline_snom_styles && (this.__inline_snom_styles=new StyleSheet(this.snom_element))
        return {
            classList: new ClassList(this.snom_element),
            stylesheet: this.__inline_snom_styles,
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