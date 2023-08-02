import React from 'react'
import { Hearts } from 'react-loader-spinner'
function Loader() {
  return (
    <div className='loader'><Hearts 
    height="80"
    width="80"
    color='pink'
    ariaLabel="hearts-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  /></div>
  )
}

export default Loader;