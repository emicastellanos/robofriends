import React, { Component } from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots'; //por que va entre {} ?
import  './App.css';

//A esto se le llama Smart Component (porque tiene state, es una class, y tiene atributos render,etc (llamados lifecycle hooks))
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [], //por que no anda si digo robots : {robots}
            searchField: ''
        }
    }

    //onSearchChange(event){ en lugar de definirlo asi, lo tengo que definir de la siguiente forma (rule of fire):
    onSearchChange = (event) => { //random name (esto es una funcion clasica de js pero arrow function )
        this.setState( {searchField: event.target.value } ) ;
    }


    //no se usan arrow functions porque es una funcion de react 
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
           return response.json()
        })
        .then(users => this.setState( {robots: users } )); // aca me estaria dejando dudas ese users
    }

    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else {
            return (
                <div className='tc'>
                    <h1 className='f-subheadline'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/> 
                </div>
            );

        }

        
    }
}

export default App;