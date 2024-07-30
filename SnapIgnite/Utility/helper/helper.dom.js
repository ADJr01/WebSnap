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

    function isValidHTML(htmlString) {
        // Remove content between tags for simplicity
        htmlString = htmlString.replace(/>[^<]*</g, '><');

        const stack = [];
        const regex = /<\/?([a-z]+[1-6]?)>/gi;
        let match;

        while ((match = regex.exec(htmlString)) !== null) {
            const tag = match[1];

            if (match[0][1] !== '/') { // opening tag
                stack.push(tag);
            } else { // closing tag
                if (stack.length === 0 || stack.pop() !== tag) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }


    return {
        isDomInstance: isValidHTMLElemet,
        parseStyle: parseStyleSheet,
        readAttributes,
        isValidHTML
    }
}