import { Component } from 'react'
import './monster-card.css'

export class MonsterCard extends Component {
    render() {
        const { id, name, email } = this.props;
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} className='monster-img' />
                <h2 className='monster-name'>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default MonsterCard;