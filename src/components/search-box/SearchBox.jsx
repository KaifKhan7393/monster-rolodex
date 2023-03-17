import { Component } from 'react'
import './search-box.css'

export class SearchBox extends Component {
    render() {
        const { onChangeHandler, monsterSearchBox, placeholder } = this.props;
        return (
            <div>
                <input
                    type='search'
                    placeholder={placeholder}
                    className={`search-box ${monsterSearchBox}`}
                    onChange={onChangeHandler} />
            </div>
        )
    }
}

export default SearchBox