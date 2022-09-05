
export const XEventList = {
    ENGINE_INIT:"xpell-init",
    app_loaded:"xapp-loaded",
    vm_loaded:"xvm-loaded",
    engine3d_init:"x3d-init",
}

class XEventManager {

    /**
     * creates and fire event
     */
    static fire(type_arg, options?){
        const se = new XEvent(type_arg,options)
        XEventManager.fireXpellEvent(se)
    }

    static fireXpellEvent(xevent) {
        //console.log('fire',spell_event)
        document.dispatchEvent(xevent)
        
        
    }
}


class XEvent extends CustomEvent<XEvent> {

    constructor(type_arg, options?) {
        super(type_arg, options)
    }

    async fire() {
        XEventManager.fire(this)
    }
}

export default XEventManager
export {XEvent,XEventManager }
