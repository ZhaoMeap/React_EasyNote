import { useState, useEffect } from 'react'
import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() =>{
        window.alert("處理成功")
    }, [data])

    return <div className='root'>
        <Edit add={setData} />
        <List listData={data} deleteData={setData} />
    </div>
}

export default Home