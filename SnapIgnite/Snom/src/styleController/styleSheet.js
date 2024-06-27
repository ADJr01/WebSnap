import Snom from "../../index.js";
import {dom_helper} from "../../../Utility/helper/index.js";

export default class StyleSheet{

    constructor(snapElement) {
        if(!snapElement instanceof Snom) throw new Error('Invalid Snom Element Found.');
        this.creatorElement = snapElement
        this.inline_styles = dom_helper.parseStyle( this.creatorElement);
    }

}