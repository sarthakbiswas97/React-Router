import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

// const [data, setData] = useState([])

// useEffect(() => {
//   fetch('https://api.github.com/users/sarthakbiswas97')
//   .then(response => response.json())
//   .then(res => {
//     setData(res)
//   })
// }, [])

const data = useLoaderData()

  return (
    <div
        className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github picture" width={300}/>
    </div>
  )
}

export default Github

export const githubLoader  = async () => {
    const response = await fetch('https://api.github.com/users/sarthakbiswas97')
    return response.json();
}