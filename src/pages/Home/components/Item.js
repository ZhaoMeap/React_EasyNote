const Item = ({ note, day, time }) => {
    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${day} ${time}`}</p>
        </div>
        <buttom className="remove">刪除</buttom>
    </div>
}

export default Item