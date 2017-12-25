import * as constant from './constant'
import  { fromJS } from 'immutable' 
const defaultDate = fromJS({
    focused:false,
    list:[]
})

export default (state = defaultDate, action )=>{
    if(action.type === constant.TYPE_FOCUS){
        return state.set('focused',true)
        
    }
    if(action.type === constant.TYPE_BLUR){
        return state.set('focused',false)
    }
    if(action.type ===constant.TYPE_LIST_DATE){
        console.log(action.data);
        return state.set('list',action.data)
    }
    return state
}