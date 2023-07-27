import { useState } from 'react'
import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {

    const [data, setData] = useState([])

    return <div className='root'>
        <Edit add={setData} />
        <List listData={data} />
    </div>
}

export default Home