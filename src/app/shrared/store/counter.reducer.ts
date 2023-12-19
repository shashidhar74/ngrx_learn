import { createReducer, on } from "@ngrx/store"
import { changeChannel, customIncrement, decrement, increment, reset } from "./counter.action";
import { initialstate } from "./counter.state";
import { state } from "@angular/animations";

const _counterReducer = createReducer(initialstate,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };

    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };

    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        };

    }),
    on(customIncrement,(state,action)=>{
        return{
            ...state,
            counter:action.action=='add'?state.counter+action.value:state.counter-action.value
        }
    }),
    on(changeChannel,(state,action)=>{
        return{
            ...state,
            channelname:action.channel
        }
    })
)
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}