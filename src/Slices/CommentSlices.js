import { createSlice } from "@reduxjs/toolkit";


const commentSlices = createSlice({
    name:'comment',
    initialState:{
        loading:false,
        comments:[]
    },
    reducers:{
        commentRequest(state, action){
            return{
                loading:true
            }
        },
        commentSuccess(state, action){
            return{
                loading:false,
                isReviewSubmitted: true
            }
        },
        commentFail(state, action){
            return{
                loading:false,
                error:action.payload.error
            }
        },
        clearCommentSubmitted(state, action) {
            return {
                ...state,
                isReviewSubmitted: false
            }
        }
    }
})

const {actions, reducer}= commentSlices;

export const {commentRequest, commentSuccess, commentFail, clearCommentSubmitted} = actions;

export default reducer;