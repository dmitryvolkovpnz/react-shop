import React, {Component} from 'react';
import Item from "./item";

export class Items extends Component {
    render() {
        return(
            <div className='main'>
                <h3>Наушники</h3> 
                <main>
                    {this.props.items.map(el => (
                        <Item key={el.id} item={el} onAdd={this.props.onAdd} onDetail={this.props.onDetail}/>
                    ))}
                </main>
            </div>
        )
    }
}


export default Items;