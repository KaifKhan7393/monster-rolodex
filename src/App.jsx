import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => console.log(this.state)
      ))
  }

  searchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchText }
    });
  }


  render() {
    const { monsters, searchText } = this.state;
    const { searchChange } = this;

    // This array is created for storing the filtered monsters
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    })

    return (
      <div className='App'>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={searchChange}
          monsterSearchBox='monster-search-box'
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App