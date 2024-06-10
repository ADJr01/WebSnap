import Snom from "../Snom/index.js";

export default class Controller{

    constructor() {
        this.Container = null;
        this.features =null;
        this.ChildList = [];
    }

    useConfiguration(snapConfig){
        const container_id = snapConfig.container;
        const containerDom = document.getElementById(container_id);
        if(!containerDom)throw new Error('Failed To Create Snap');
        this.Container = new Snom(containerDom);
        const containerChilds = Array.from(this.Container.snom_element);
        containerChilds.forEach(element=>{
            this.ChildList.push(new Snom(element));
        });
        return true;
    }


}