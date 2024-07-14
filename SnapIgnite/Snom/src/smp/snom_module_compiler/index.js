export default class Snom_module_compiler{

    constructor(template) {
        this.template = template;
        this.parsedObject = null;
    }

    get isCompiled(){
        return this.parsedObject!==null;
    }

    compile(){
        //compiler
    }


}