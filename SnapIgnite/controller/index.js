import Snom from "../Snom/index.js";
import SyncWave from "../SyncWave/index.js";
import initialiseSnapIgnite from "./src/initialiseSnapIgnite.js";

export default class Controller{

    constructor() {
        this.Container = null;
        this.___syncWave_instance___ = new SyncWave();
        this.features =null;
        this.ChildList = [];
        initialiseSnapIgnite(this.___syncWave_instance___);
        this.___syncWave_instance___.subscribe(SyncWave.EVENTS.onNewElementInContainer,e=>{
            this.ChildList = [...this.ChildList,new Snom(e.detail.snom_element)];
        })
    }

    static get Observer(){
        return this.___syncWave_instance___;
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