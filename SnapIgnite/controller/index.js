import Snom from "../Snom/index.js";
import SyncWave from "../SyncWave/index.js";
import initialiseSnapIgnite, {SharedInstance} from "./src/initialiseSnapIgnite.js";
import {utility_helper} from "../Utility/helper/index.js";

export default class Controller{

    constructor() {
        this.controller16_id = utility_helper.uID(16);
        this.Container = null;
        this.features =null;
        this.ChildList = [];
        initialiseSnapIgnite(this.controller16_id);
        Controller.Observer(SharedInstance().Observer()).subscribe(SyncWave.EVENTS.onNewElementInContainer,e=>{
            const self_identity = this.Container.snom_element.getAttribute('snom_identity');
            const incoming_child_parent = e.detail.parent_snom_identity;
            if(self_identity!==incoming_child_parent)return false;
            this.ChildList = [...this.ChildList,new Snom(e.detail.snom_element)];
        });
        Controller.Observer(this.controller16_id).subscribe(SyncWave.EVENTS.onSnomCreate,event=>{
            if(!this.Container)return false;
            const {detail} = event;
            const {snom_identity,snom} = detail;
            const parent_identity = this.Container.snom_element.getAttribute('snom_identity');
            if(parent_identity===snom_identity)return false;
            // things to do on new Snom Create
        })
    }

    static Observer(linker_16D){
        if(!linker_16D)throw new Error('Snap Linking Failed');
        if(window.snapENV && window.snapENV[linker_16D])return window.snapENV[linker_16D];
        !window.snapENV && (window.snapENV = {});
        window.snapENV[linker_16D] = new SyncWave();
        return window.snapENV[linker_16D];
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