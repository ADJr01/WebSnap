import Snom from "../../index.js";

export default class ClassList{

    constructor(snapElement) {
        if(!snapElement instanceof Snom) throw new Error('Invalid Snom Element Found.');
        this.creatorElement = snapElement

    }

    get classes(){
        return this.creatorElement.snom.classList;
    }



    replaceClass(classA,classB) {
            if(!this.classes.contains(classA))return false;
            this.creatorElement.snom.classList.remove(classA);
            this.creatorElement.snom.classList.add(classB);
            return true;
    }

    addClass(...className){
        this.creatorElement.snom.classList.add(...className);
    }

    removeClass(...className){
        this.creatorElement.snom.classList.remove(...className);
    }


}