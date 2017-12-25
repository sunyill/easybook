import * as constant from './constant'
import  { fromJS } from 'immutable' 
const defaultDate = fromJS({
    focused:false,
    list:[]
})

export default (state = defaultDate, action )=>{
    switch(action.type){
        case constant.TYPE_FOCUS:
            return state.set('focused',true)
        case constant.TYPE_BLUR:
            return state.set('focused',false)
        case constant.TYPE_LIST_DATE:
            return state.set('list',action.data)
        default:
           return state 
    }
}