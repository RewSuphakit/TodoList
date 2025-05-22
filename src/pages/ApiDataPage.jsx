import React,{ useState,useEffect} from 'react'
import axios from 'axios'
function ApiDataPage() {
  const [data, setData] = useState([])
 const response = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setData(res.data)
    
  }
  useEffect(() => {
    response()
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-bold'>API Data</h1>
      <div className='grid grid-cols-3 gap-4'>
        {data.map((item) => (
          <div key={item.id} className='border p-4'>
            <h2 className='text-xl font-semibold overflow-auto'>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApiDataPage
