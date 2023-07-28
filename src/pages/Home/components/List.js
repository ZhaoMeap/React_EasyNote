import Item from './Item'

const List = ({ listData, deleteData }) => {
    return <div className='list'>
        {
            listData.map((item) => {
                const { note, day, time, id } = item
                return <Item 
                    key={id}
                    id={id}
                    note={note}
                    day={day}
                    time={time}
                    deleteData={deleteData} />
            })
        }
    </div>
}

export default List