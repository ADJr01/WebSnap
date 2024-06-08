import Snom from "../../index.js";
import {dom_helper,utility_helper} from '../Utility/helper/'
export default class StyleSheet{

    constructor(snapElement) {
        if(!snapElement instanceof Snom) throw new Error('Invalid Snom Element Found.');
        this.creatorElement = snapElement
        this.inline_styles = dom_helper.parseStyle();

    }
}