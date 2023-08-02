import React, { useEffect, useState } from 'react'
import Base from '../../Base/Base'
import { useDispatch, useSelector } from 'react-redux'
import { getPostComment, getSinglePost } from '../../Actions/PostsActions'
import { useParams } from 'react-router-dom'
import Loader from '../../DashBoard/Loader'
import Swal from 'sweetalert2'


function PostDetails() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([])

  //redux -store data
  const {post,loading} = useSelector((state)=>state.singlepost);
  const {isReviewSubmitted} = useSelector((state)=>state.comment);

  const dispatch = useDispatch();
  const {id} = useParams();

    // alert customization
    const handleComment=(e)=>{
      e.preventDefault();
      const newComment= {
        comment:comment,
        postId:id,
      };
      dispatch(getPostComment(newComment));
      setComments([...comments, newComment]); 
      console.log(comments)
      setComment('')
      if(isReviewSubmitted){
        Swal.fire({
         
          icon: 'success',
          title: 'comment sucessful',
          showConfirmButton: true,
          timer: 2500
        })
      }
    }
    
    useEffect(()=>{
      dispatch(getSinglePost(id))
    },[isReviewSubmitted])

  return ( 
  
    <Base>   
    {loading ? <Loader/> :
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6  lg:grid lg:max-w-7xl  lg:grid-cols-1 lg:gap-x-8 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-1 ">
          {post.images && post.images.map(image =>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
            <img
              src={image.image}
              alt='memmories'
              className="h-[300px] w-[610px] object-cover object-center"
            />
          </div>)}
        </div>
        </div>
          
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-700 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{post.title}</h1>

             {/* Description and details */}
             <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-400">{post.about}</p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-white">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{post.tags}</p>
              </div>
            </div>

          </div>
          <div className="mt-3">
            {/* comment section */}
                  <section class="bg-white  dark:bg-gray-900 py-8 lg:py-16">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-lg lg:text-2xl text-gray-300">Comment</h2>
                        </div>
                            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea 
                                id="comment" 
                                rows="6"   
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." 
                                required
                                onChange={(e)=>setComment(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <button 
                            onClick={handleComment}
                            type="submit"
                                className="inline-flex  bg-indigo-600 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Post comment
                            </button>
                             {/* Render comments */}
                             {post?.reviews?.map((review) => (
                              <div
                                key={review._id} // Assuming '_id' is the unique identifier for each review
                                className="mt-3 py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                              >
                                <p className="text-gray-800 dark:text-white text-sm">
                                  {review.comment}
                                </p>
                              </div>
                            ))}
                      </div>
                    </section>
            </div>
        </div>
      </div>
    </div>}
    </Base>
  )
}

export default PostDetails;