


/**
 * XData (Xpell Global shared Variables & Objects)
 */


 class XDataSource {
    objects: {}
    variables: {}
    constructor(){
        this.objects = {}
        this.variables = {}
    }


}

//singletone
export const XData = new XDataSource()

export default XData