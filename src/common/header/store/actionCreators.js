import   * as  constant from './constant'
import axios from 'axios'
import { fromJS } from 'immutable'

export const typeFocus = ()=>({
    type: constant.TYPE_FOCUS
})

export const typeBlur = ()=>({
    type: constant.TYPE_BLUR
})

const typeSearchList = (data)=>({
    type: constant.TYPE_LIST_DATE,
    data:fromJS(data)
})

export const listDate = ()=>{
    return (dispatch)=>{
        axios.get('/api/search_list.json').then(res=>{
            const listData = res.data
            dispatch(typeSearchList(listData.data))
        }).catch((err)=>{
            console.log(err);
            }  
        )
    }
     // type: constant.LIST_DATE
}