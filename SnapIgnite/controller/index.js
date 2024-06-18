import Snom from "../Snom/index.js";
import SyncWave from "../SyncWave/index.js";
import initialiseSnapIgnite from "./src/initialiseSnapIgnite.js";
import {utility_helper} from "../Utility/helper/index.js";

export default class Controller{

    constructor() {
        this.controller32_id = utility_helper.uID(32);
        this.Container = null;
        this.features =null;
        this.ChildList = [];
        initialiseSnapIgnite(Controller.Observer);
        Controller.Observer.subscribe(SyncWave.EVENTS.onNewElementInContainer,e=>{
            const self_identity = this.Container.snom_element.getAttribute('snom_identity');
            const incoming_child_parent = e.detail.parent_snom_identity;
            if(self_identity!==incoming_child_parent)return false;
            this.ChildList = [...this.ChildList,new Snom(e.detail.snom_element)];
        });
        Controller.Observer.subscribe(SyncWave.EVENTS.onSnomCreate,event=>{
            console.log(this);
        })
    }

    static get Observer(){
       if(window.snap_observer_instance && window.snap_observer_instance instanceof SyncWave)return window.snap_observer_instance;
        window.snap_observer_instance = new SyncWave();
        return window.snap_observer_instance;
    }

    useConfiguration(snapConfig){
        const container_id = snapConfig.container;
        const containerDom = document.getElementById(container_id);
        if(!containerDom)throw new Error('Failed To Create Snap');
        this.Container = new Snom(containerDom);
        const containerChildren = Array.from(this.Container.snom_element.children);
        containerChildren.forEach(element=>{
            this.ChildList.push(new Snom(element));
        });
        return true;
    }


}