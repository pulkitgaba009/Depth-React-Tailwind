import React, { useEffect, useState } from 'react'

function GitHub() {
  const [data,setData] = useState([]);
  
  useEffect(()=>{
  fetch('https://api.github.com/users/pulkitgaba009')
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    setData(data)
  })
  },[])
  
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-4'>
      Git Hub Followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default GitHub