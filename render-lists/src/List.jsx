
function List(props){

    const category = props.category;
    const itemList = props.items;

    // itemList.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical Order
    // itemList.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical Order
    // itemList.sort((a, b) => a.calories - b.calories); //Numeric Order
    // itemList.sort((a, b) => b.calories - a.calories); //Reverse Numeric Order

    // const lowCalitems = itemList.filter(item => item.calories < 100);
    // const highCalitems = itemList.filter(item => item.calories > 100);

    const listItems = itemList.map(item => <li 
                                            key={item.id}>{item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                          </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>     
        </>
    );

}

export default List