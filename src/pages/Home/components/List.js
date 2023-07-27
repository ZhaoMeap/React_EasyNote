import Item from './Item'

const List = ({ listData }) => {
    return <div className='list'>
        {
            listData.map((item) => {
                const { note, day, time } = item
                return <Item note={note} day={day} time={time} />
            })
        }
    </div>
}

export default List