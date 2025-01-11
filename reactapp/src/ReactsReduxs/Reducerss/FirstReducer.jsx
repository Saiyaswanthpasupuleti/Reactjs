import { DECREMENT, INCREMENT } from "../Actions/FirstAction"


const currentState={
    count:0
}


export const resultReducer=(state=currentState,action)=>{
    switch (action.type){
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
            return {...state,count:state.count-1}
        default :
            return state;
    }

}