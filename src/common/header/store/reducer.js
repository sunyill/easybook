import * as constant from './constant'
import  { fromJS } from 'immutable' 
const defaultDate = fromJS({
    focused:false
})

export default (state = defaultDate, action )=>{
    if(action.type === constant.TYPE_FOCUS){
        return state.set('focused',true)
        
    }
    if(action.type === constant.TYPE_BLUR){
        return state.set('focused',false)
    }
    return state
}