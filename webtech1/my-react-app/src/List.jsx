import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;

    const fruits = [{id:1, name:"orange", caleroies: 95},
        {id:2, name:"apple", caleroies: 45}, 
        {id:3, name:"banan", caleroies: 159},
    ];
    /* const fruits = [{id:1, name:"orange", caleroies: 95},
                    {id:2, name:"apple", caleroies: 45}, 
                    {id:3, name:"banan", caleroies: 159}
                    ]; */
/*  fruits.sort((a, b) => a.name.localeCompare(b.name));
    fruits.sort((a, b) => b.name.localeCompare(a.name));*/
   /*  fruits.sort((a, b) => a.caleroies - b.caleroies); */

/*  const lowCalFruits = fruits.filter(fruit => fruit.caleroies < 100);*/
/*  const highCalFruits = fruits.filter(fruit => fruit.caleroies > 100)*/

    const listItems = fruits.map(item => <li key={item.id}>
                                            {item.name} : &nbsp;
                                            <b>{item.caleroies}</b></li>);

    return(<>
    <h3>{category}</h3>
    <ul>{listItems}</ul>
    </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
        name: PropTypes.string, 
        caleroies: PropTypes.number})),
 }

export default List