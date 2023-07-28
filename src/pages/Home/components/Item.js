const Item = ({ id, note, day, time, deleteData }) => {

    function deleteItem() {
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${day} ${time}`}</p>
        </div>
        <buttom onClick={deleteItem} className="remove">刪除</buttom>
    </div>
}

export default Item