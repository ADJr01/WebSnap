import {dom_helper} from "../../../../Utility/helper/index.js";
import parser from "../snom_module_parser/parser.js";
function componentBuilder(templateObjectArray){
    function createElement(node) {
        // Create the element with the given tag
        const element = document.createElement(node.tag);

        // Set attributes
        if (node.attributes) {
            for (const key in node.attributes) {
                if (node.attributes.hasOwnProperty(key)) {
                    element.setAttribute(key, node.attributes[key]);
                }
            }
        }

        // Process children
        if (node.children) {
            node.children.forEach(child => {
                if (typeof child === 'string') {
                    // If the child is a string, create a text node
                    element.appendChild(document.createTextNode(child));
                } else {
                    // Otherwise, it's another element object, so recurse
                    element.appendChild(createElement(child));
                }
            });
        }

        return element;
    }
    let elementList = [];
    const n = templateObjectArray.length;
    for (let i = 0; i < n; i++) {
        if(templateObjectArray[i] && templateObjectArray[i].tag){
            elementList.push(createElement(templateObjectArray[i]))
        }
    }
    return elementList;
}
class TemplateParsingError extends Error{
    constructor(message) {
        super(message);
        this.name='TemplateParsingError'
        this.message=message;
    }
}

class SMPCError extends Error {
    constructor(message) {
        super(message);
        this.name='TemplateParsingError'
        this.message=message;

    }
}

export default class Snom_module_compiler{

    constructor(template) {
        this.template = template;
        this.templateTreeObject=null;
        this.templateTreeElement=null;
        const isValidTemplate = dom_helper.isValidHTML(template)
        if (!isValidTemplate) return new TemplateParsingError('Failed To Parse Template')

    }

    get isCompiled(){
        return this.templateTreeObject!==null;
    }


    compile(){
        //compiler
        this.templateTreeObject =  parser(this.template);
        if(!this.isCompiled && !Array.isArray(this.templateTreeObject)) throw new SMPCError("Unable To Compile template during compilation face")
        this.templateTreeElement = componentBuilder(this.templateTreeObject)
        return this;
    }


}