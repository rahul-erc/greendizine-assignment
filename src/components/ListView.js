import "../styles/ListView.scss"

const ListView = ({ items }) => {
    return (
        <ul>
            {
                items.map((value, index) => {
                    return (
                        <div key={ index }>
                            <li>
                                <p className="circle">{value.id}</p>
                                <img src={value.avatar} alt="None" />
                                <p>{value.first_name}</p>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default ListView;
