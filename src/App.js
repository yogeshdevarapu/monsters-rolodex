import React ,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      monsters:[],
      searchField:''
    }
    //this.handleChange=this.handleChange.bind(this); // if the function is regular then we need to set 'this' manullay of the function
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=> this.setState({monsters:users}));
  }
  // handleChange(e){
  //   this.setState({searchField:e.target.value});
  // }
  handleChange= (e) =>{
    this.setState({searchField:e.target.value}); // this automatically point to app component b/s it is declared in the arrow function
  }
  render()
  {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      
      );
    return (
      <div className="App">
      <SearchBox placeHolder="Search Master" handleChange={this.handleChange}/>
     
      <CardList monsters={filteredMonsters}></CardList>
     
      </div>
  
    );
  }

}

export default App;
