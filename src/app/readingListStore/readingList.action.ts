import { createAction,props } from '@ngrx/store';

const readingList_Add=createAction(
    'ADD_TO_READINGLIST',
    props<{content:any}>()
)

const removeFromList=createAction(
    'REMOVE_FROM_READINGLIST',
    props<{index:any}>()
)




export {readingList_Add,removeFromList}
