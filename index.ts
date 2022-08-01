
import { IXObjectData, XObjectPack } from "./src/XObject"
import { XImage, XLabel } from "./src/xui/XUICoreObjects"
import XUIObject from "./src/xui/XUIObject"
import {Xpell as _x,XUI,XUtils as _XU,XData as _XD,XParser} from "./xpell"

console.log(_x.version)


class Card extends XUIObject  {   
    constructor(data) {
        
        const defaults = {
            _type:"card",
            _img_url:null,
            style:"width:200px;aspect-ratio:1;border:2px black solid;font-size:3rem;display:flex;flex-direction:column;justify-content:center;align-items:center"
        }
        super(data,defaults)

        if(this["_img_url"]){
            const img = new XImage ({_id:"my-img",src:this["_img_url"]})
            this.append(img)
        }
        if(this["_card_text"]){
            const txt = new XLabel ({_id:"my-lbl",text:this["_card_text"]})
            this.append(txt)
        }
    }
}


class CardPack extends XUIObject  {
    private _cards: Array<Card>
    constructor(data) {
        
        const defaults = {
            _type:"card-pack",
            _cards:[],
            _players:{},
            style:"width:300px;aspect-ratio:1;border:2px green solid;font-size:3rem;display:flex;flex-wrap:wrap;"
        }
        super(data,defaults)
        this._cards.forEach(crd => {
            const crdObj = XUI.create(crd)
            this.append(crdObj)
        })
    }

    async onFrame(frameNumber: number): Promise<void> {
        const pa = _XD.objects["players-list"]
        pa.forEach(player => {
            if(!this["_players"][player.id]) {
                let iplayer = JSON.parse(JSON.stringify(player))
                
                iplayer["lastSeen"] = frameNumber
                this["_players"][player.id] = iplayer
                
                console.log("adding player " + iplayer.id);
                const crd = {
                            _type:"card",
                            _id:"crd-" + player.id,
                            _card_text:iplayer.name,
                            _img_url:iplayer.image
                        }
                this.append(XUI.create(crd))
            } else {
                this["_players"][player.id].lastSeen = frameNumber
            } 
        })


        const playersArray = Object.keys(this["_players"])
        if(this["_players"]) {

            
            playersArray.forEach(player => {
                const p1 = this["_players"][player]
                //console.log(p1["name"],p1["lastSeen"]);
                
                if(p1["lastSeen"] != frameNumber) {
                    // console.log("anomaly ", p1["lastSeen"]);
                    const domCard = document.getElementById("crd-" + p1["id"]) 
                    
                    if(domCard)
                    document.getElementById(this._id)?.removeChild(domCard)
                    
                }
            })
        }

        super.onFrame(frameNumber)


    }
}






class CardObjects {
    
    static getObjects(): object {
        return  {
            "card":Card,
            "card-pack":CardPack
        }
    }
}

XUI.importObjects(CardObjects)

_x.loadModule(XUI)

console.log(_x.version);


_x.start()

const imgpai = "https://avatars.githubusercontent.com/u/38420432?s=200&v=4"


const playersDataSource = [
    {
    id:1,
    name:"Tamir",
    img:imgpai
},
{
    id:2,
    name:"Liad",
    img:imgpai
},
{
    id:3,
    name:"Itay",
    img:imgpai
}
]



//update XData object 

_XD.objects["players-list"] = playersDataSource

const _app = {
    xpell: {
        version: 1
    },
    views: {
        "hello-view": {
            _type: "view",
            style:"",
            _id: "hello-view",
            animation: "fade"
        }
    },
    defaults: {
        view: "hello-view"
    },
    player: {
        html_element: "player"
    }

}






// XUI.loadApp(_app)

// XUI.vm.showView("hello-view")


const xml = `<sub>ho</sub>`

XParser.addHtml2SpellMapItem("sub","xhtml")
const spltxt = XParser.xmlString2Xpell(xml)

if(spltxt) {
    const spl = XUI.create(spltxt)
    const dom = spl.getDOMObject()
    document.getElementById("player")?.append(spl.getDOMObject())
}
console.log(spltxt);


// setTimeout(() => {
//         console.log("ok");
//         let list = _XD.objects["players-list"]
//         list.push({id:4,name:"Keren",img:imgpai})
// }, 3000);

// setTimeout(() => {
    
//         console.log("delete");
//         let list = _XD.objects["players-list"]
//         const p = list.pop()

//         _XD.objects["players-list"] = list
//         console.log(list,p);
        
        
    


// }, 6000);



