export default function (){
    function isValidHTMLElemet(element){
        return element && element instanceof HTMLElement;
    }

    function parseStyleSheet(htmlElem){
        console.log('element style: ',htmlElem)
        if(!htmlElem.style)return {}
        const style_sheet=  {};
        const elementStyle = htmlElem.style;
        for (const elementStyleKey in elementStyle) {
            if(elementStyle[elementStyleKey]){
                style_sheet[elementStyleKey] = elementStyle[elementStyleKey];
            }
        }
        return  style_sheet;

    }

    function readAttributes(element){
        const keys = Object.values(element.attributes);
        const attachedAttribs= {};
        keys.forEach(key=>{
            attachedAttribs[key] = element.getAttribute(key);
        })
        return attachedAttribs;

    }


    return {
        isDomInstance: isValidHTMLElemet,
        parseStyle: parseStyleSheet,
        readAttributes,
    }
}