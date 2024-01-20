

import {_x,_xem,_xlog} from "./src/Core/Xpell"
import {Wormholes,WormholeEvents} from "./src/Wormholes/Wormholes"

//display Xpell engine info
// _x.verbose()

_x.start()

const wormholeUrl = "ws://127.0.0.1:3030"

const getEnvironmentNameMessage = {
    _module: "xenvironment",
    _op: "get-name"
}




_xem.on(WormholeEvents.WormholeOpen, async (e) => {
    const res = await Wormholes.sendSync(getEnvironmentNameMessage)
    console.log("Wormhole Reponse (Env Name)",res)
})

Wormholes.open(wormholeUrl)

