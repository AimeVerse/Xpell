
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
                
                // console.log("adding player " + iplayer.id);
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

XUI.importObjectPack(CardObjects)
