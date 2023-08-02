import React, { useEffect, useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../Actions/PostsActions';
import { useNavigate } from 'react-router-dom';
import Base from '../../Base/Base';
import Loader from '../../DashBoard/Loader';
import { toast } from 'react-toastify';



function Form() {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redux state-datas
  const {loading, isPostCreated, error} = useSelector((state)=>state.posts)

  // image preview
  const onImagesChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState == 2 ) {
                setImagesPreview(oldArray => [...oldArray, reader.result])
                setImages(oldArray => [...oldArray, file])
            }
        }
        reader.readAsDataURL(file)
    })
}
//handle cancel button for clear the data in input fields
const handleCancel = ()=>{
  setTitle('');
  setAbout('');
  setTags('');
  setImages([]);
  setImagesPreview([]);
}
// function for add the new post using Form
  const handlePost = (e)=>{
    e.preventDefault();
    const formData = new FormData();
        formData.append('title' , title);
        formData.append('about' , about);
        formData.append('tags' , tags);
        images.forEach (image => {
            formData.append('images', image)
        })

    dispatch(createPost(formData))
  }
  useEffect(() => {
    if(isPostCreated) {
      toast('Post created successfully',{
        type:"success",
        position:toast.POSITION.TOP_CENTER
      })
        navigate('/posts')
    }

    if(error)  {
      toast('Post create failed',{
        type:"error",
        position:toast.POSITION.TOP_CENTER
      })
        console.log(error)
        return
    }
}, [isPostCreated, error])

  return (
    <Base>
    {loading? <Loader/> :
   
  
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900" >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* website logo */}
          <img
            className="mx-auto h-16 w-16"
            src="https://cutewallpaper.org/24/heart-gif-png/pin-on-decoracion.gif"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white">
            Post your Memmories
          </h2> 
        </div>

        {/* title */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlePost}  className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 dark:text-white">
                Title
              </label>
              <div className="mt-2">
                <input
                  style={{paddingLeft:'0.7rem',fontFamily:'monospace', fontSize:'0.9rem'}}
                  name="text"
                  type="text"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 dark:bg-slate-800  dark:text-white shadow-sm ring-1 ring-inset ring-indigo-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* about */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 dark:text-white">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  value={about}
                  onChange={(e)=>setAbout(e.target.value)}
                  style={{paddingLeft:'0.7rem',fontFamily:'monospace',fontSize:'0.9rem'}}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5  dark:bg-slate-800  text-gray-200 shadow-sm ring-1 ring-inset ring-indigo-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 dark:text-white">Write a few sentences about your Memmories.</p>
            </div>

            {/* tags */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="text" className="block text-sm font-medium leading-6 dark:text-white">
                  Tags
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="text"
                  type="text"
                  value={tags}
                  onChange={(e)=>setTags(e.target.value)}
                  style={{paddingLeft:'0.7rem', fontFamily:'monospace',fontSize:'0.9rem'}}
                  required
                  className="block w-full rounded-md border-0 py-1.5  dark:bg-slate-800  text-gray-200 shadow-sm ring-1 ring-inset ring-indigo-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* file */}
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 dark:text-white">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed  dark:bg-slate-800  ring-indigo-800 border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-10 w-10 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md  dark:bg-slate-800 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input 
                      id="file-upload" 
                      name="file-upload" 
                      type="file" 
                    
                      onChange={ onImagesChange}
                      className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* image preview */}
            {imagesPreview.map(image => (
                                        <img
                                            className="mt-3 mr-2"
                                            key={image}
                                            src={image}
                                            alt={`Image Preview`}
                                            width="55"
                                            height="52"
                                        />
                                    ))}

              {/* cancel and post button */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button onClick={handleCancel} type="button" className="text-sm font-semibold leading-6 dark:text-white">
                Cancel
              </button>
              <button
                type="submit"
                
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
          </div>
          </form>
        </div>
      </div>}
     
      </Base>
  )
}

export default Form