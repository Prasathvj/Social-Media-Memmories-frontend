import { createSlice } from "@reduxjs/toolkit";

const postDetails = createSlice({
    name:'singlepost',
    initialState:{
        loading:false,
        post:{}
    },
    reducers:{
        postDetailsRequest(state, action){
           return {
            loading:true
        }
        },
        postDetailsSuccess(state, action){
            return {
                loading:false,
                post:action.payload.singlepost
            }
        },
        postDetailsFail(state, action){
            return{
                loading:false,
                error:action.payload.error
            }
        }
    }
})

const {actions, reducer} = postDetails;

export const {postDetailsRequest, postDetailsSuccess, postDetailsFail} = actions;

export default reducer;