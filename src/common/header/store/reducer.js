const defaultDate = {
    focused:false
}

export default (state = defaultDate, action )=>{
    if(action.type ==="type_focus"){
        return {
            focused:true
        }
    }
    if(action.type === "type_blur"){
        return {
            focused:false
        }
    }
    return state
}