import { Component } from 'react'
import './card-list.css'
import MonsterCard from '../monster-card/MonsterCard'

export class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        const { name, email, id } = monster;
                        return <MonsterCard key={id} id={id} name={name} email={email} />
                    })
                }
            </div>
        )
    }
}

export default CardList