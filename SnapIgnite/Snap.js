import Controller from "./controller/index.js";

const demo_snap_options = {
    container: 'Type: String. Container is id or html element that contains all element those will get snap feature. Stat: Compulsory',
    features: {
        drag: 'Type: Boolean.',
        drag_feature: {
            sortable: 'Type: Boolean.',
            always_on_cursor:'Type: Boolean.'
        },
        shrink: 'Type: Boolean',
        shrink_feature: {},
    }
}

export default class Snap{

    constructor(config) {
        this.controller = new Controller();
        this.controller.useConfiguration(config);
    }
}