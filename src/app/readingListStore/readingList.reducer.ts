
import { readingList_Add, removeFromList } from "./readingList.action";
import {createReducer,on} from '@ngrx/store'

export const initialState:Array<any>=[]
const  readingListReducer=createReducer(
    initialState,
    on(readingList_Add, (state,action)=>{
        const exist=state.find((ele )=>{
            return ele.content.id ==action.content.id;
        })
       
        if(!exist){

            state=[...state,action]
            console.log('state',state)
        }
      
        return state;
    }),
    on(removeFromList,(state,action)=>{
    //  state.slice(action.index,1)
    console.log('index action',action.index)
    state=[...state]
        state.splice(action.index,1)
        return state
    })
)
export default readingListReducer