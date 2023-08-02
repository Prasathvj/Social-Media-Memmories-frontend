import axios from "axios";
import { postCreateRequest, postCreateSuccess, postCreatefail, postsRequest, postsSuccess, postsfail } from "../Slices/PostSlices";
import { postDetailsFail, postDetailsRequest, postDetailsSuccess } from "../Slices/PostDetails";
import { addComment, commentFail, commentRequest, commentSuccess } from "../Slices/CommentSlices";

export const getPosts = async(dispatch)=>{
    try {
        dispatch(postsRequest());
        const response = await axios.get('https://memmories-jijy.onrender.com/social/posts');
        
    
        if (response && response.status === 200 && response.data) {
          dispatch(postsSuccess(response.data));
        } else {
          dispatch(postsfail('Invalid response data'));
        }
      } catch (error) {
        console.error('Error:', error);
        dispatch(postsfail(error.response?.data));
      }
}

export const createPost = postData => async(dispatch) =>{
    try {
         dispatch(postCreateRequest())
         const {data} = await axios.post('https://memmories-jijy.onrender.com/social/post', postData)
         console.log(data)
    dispatch(postCreateSuccess(data))
    } catch (error) {
        console.log(error)
        dispatch(postCreatefail(error.response.data))
    }
   
}

export const getSinglePost = id => async(dispatch)=>{
    try {
        dispatch(postDetailsRequest())
        const {data} = await axios.get(`https://memmories-jijy.onrender.com/social/${id}`)
        console.log(data)
        dispatch(postDetailsSuccess(data))
    } catch (error) {
        dispatch(postDetailsFail(error.response.data))
    }
}

export const getPostComment = newComment =>async(dispatch)=>{
    try {
        dispatch(commentRequest());
        const {data} = await axios.post('https://memmories-jijy.onrender.com/social/post/comment',newComment)
        dispatch(commentSuccess(data));
    } catch (error) {
        dispatch(commentFail(error.response.data))
    }
}