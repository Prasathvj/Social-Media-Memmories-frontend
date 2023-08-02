import React, { useEffect } from 'react'
import { getPosts } from '../../Actions/PostsActions'
import { useDispatch, useSelector } from 'react-redux'
import { HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import Base from '../../Base/Base';
import Loader from '../../DashBoard/Loader';


function Posts() {
  const dispatch = useDispatch();

  //redux-store data
  const {newpost,loading} = useSelector((state)=>state.posts)
  useEffect(()=>{
    dispatch(getPosts)
    
  },[getPosts])

  return (
    <Base>
    {loading ? <Loader/> :
      <div className="dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="mb-10 text-center text-yellow-700 text-xl rounded-lg bg-slate-800 p-2">Memmories</h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        {/* get all posts using map function */}
          {newpost && newpost.map((post) => (
            <div key={post.id}  className="">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
               <Link to={`/post/${post._id}`}>
              {post.images.length > 0 &&
                <img
                  src={post.images[0].image}
                  alt={post.title}
                  className="h-[250px] w-[390px] object-cover object-center "
                />}
              </Link>
               
              </div>
              <div className=''>
              <Link to={`/post/${post._id}`}><h3 className="flex justify-center mt-1 text-base text-center text-blue-500 rounded-sm"><AtSymbolIcon className="mr-1 h-5 w-5 text-orange-500" />{post.title}</h3> </Link>
              <p className="p-2 mt-1 mb-1 text-sm font-medium text-gray-200 bg-slate-800 rounded-lg">{post.about}</p>
              <span className="p-1 mt-1 text-sm font-medium text-green-500 rounded-lg bg-slate-700">#{post.tags}</span>
              <div className='like-icons'>
                <p className="mt-1 text-lg font-medium text-gray-900"><HeartIcon class="h-6 w-6 text-pink-500" /></p>
               
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>}
    </Base>
  )
}

export default Posts