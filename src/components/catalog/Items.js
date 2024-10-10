import React from 'react';
import Item from "./item";

function Items(props) {
        return(
            <div className='main'>
                <h3>Наушники</h3> 
                <main>
                    {props.items.map(el => (
                        <Item key={el.id} item={el} onAdd={props.onAdd} onDetail={props.onDetail}/>
                    ))}
                </main>
            </div>
        )
}


export default Items;