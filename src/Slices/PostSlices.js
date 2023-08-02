import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:'posts',
    initialState:{
        loading:false
    },
    reducers:{
        postsRequest(state,action){
            return{
                loading:true
            }
        },
        postsSuccess(state,action){
            return{
                loading:false,
                newpost:action.payload.newpost
            }
        },
        postsfail(state,action){
            return{
                loading:false,
                error: action.payload
            }
        },
        postCreateRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        postCreateSuccess(state,action){
            return{
                ...state,
                loading:false,
                post:action.payload.post,
                isPostCreated:true
            }
        },
        postCreatefail(state,action){
            return{
                ...state,
                loading:false,
                error: action.payload,
                isPostCreated:false
            }
        },
        ClearPostCreated(state,action){
            return{
                ...state,
                isPostCreated:false
            }
        },

    }
});

const {actions, reducer} = postsSlice;

export const {postsRequest, postsSuccess, postsfail ,postCreateRequest,postCreateSuccess,postCreatefail,ClearPostCreated} = actions
export default reducer;