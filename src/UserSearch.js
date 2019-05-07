import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class UserSearch extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
            searchField: ''
        };
    }
handleChange = (event) => {
    let initialPlanets = [];
    
    this.setState({ searchfield: event.target.value })
    console.log(this.state.searchfield);
	var url = new URL("https://api.github.com/search/users"),
    params = {q:this.state.searchfield, per_page:100}
	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url)
        .then(response => {
        	console.log(response.items);
            return response.json();
        }).then(data => {
        initialPlanets = data.items.map((planet) => {
            return planet
        });
        console.log(initialPlanets);
        this.setState({
            planets: initialPlanets
        });
    }).catch(function() {
        console.log("error");
    });
}

render() {
    	let planets = this.state.planets;
        let optionItems = planets.map((planet) =>
                <option key={planet.login}>{planet.login}</option>
            );

        return (
        <div className='fl w-50 pa2'>
        	<span>Git User : </span>
            <input
                className='pa3 grow ba bw1 b--green bg-lightest-blue' onChange={this.handleChange}
                list="user-search" id="user-search-choice" name="user-search-choice"
        		onselect="myFunction()"
            />
           
            <datalist id="user-search">
            {optionItems}
            </datalist>
         </div>


        
        )
}
}
export default UserSearch;