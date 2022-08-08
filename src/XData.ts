


/**
 * XData (Xpell Global shared Variables & Objects)
 */


export class XDataSource {
    objects: {}
    variables: {[k:string]:string | number}
    constructor(){
        this.objects = {}
        this.variables = {}
    }


}

/**
 * @property 
 */
export const XData = new XDataSource()

export default XData