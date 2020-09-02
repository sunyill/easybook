import * as constant from './constant'
const defaultDate = {
    focused:false
}

export default (state = defaultDate, action )=>{
    if(action.type === constant.TYPE_FOCUS){
        return {
            focused:true
        }
    }
    if(action.type === constant.TYPE_BLUR){
        return {
            focused:false
        }
    }
    return state
}