


/**
 * XData (XPell Global shared Variables & Objects)
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
const XData = new XDataSource()

export default XData