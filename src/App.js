import React, { Component } from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //por que va entre {} ?
import  './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots, //por que no anda si digo robots : {robots}
            searchField: ''
        }
    }

    //onSearchChange(event){ en lugar de definirlo asi, lo tengo que definir de la siguiente forma (rule of fire):
    onSearchChange = (event) => { //random name (esto es una funcion clasica de js pero arrow function )

        this.setState( {searchField: event.target.value } ) ;
    
    }

    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })

        return (
            <div className='tc'>
                <h1 className='f-subheadline'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/> 
            </div>
            );
    }
}

export default App;