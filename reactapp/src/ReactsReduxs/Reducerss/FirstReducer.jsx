import { DECREMENT, INCREMENT } from "../Actions/FirstAction"

const initialState={
    count:0
}



export const CounterReducers=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,count:state.count+1}

        case DECREMENT:
            return {...state,count:state.count-1}
        default :
            return {count:0}
    }


}