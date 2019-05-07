import React from 'react';

import {StateJson} from './StateJson';
const StateSearch = () => {

	let stateComponent = StateJson.map((state) =>
                <option key={state.name}>{state.name}</option>
            );
    return(
        <div className='fl w-50 pa2'>
        	<span>State : </span>
            <input
                className='pa3 grow ba bw1 b--green bg-lightest-blue'
                list="state-search" id="state-search-choice" name="state-search-choice"
        
            />
           
            <datalist id="state-search">
            	{stateComponent}
            </datalist>
         </div>
    );
}


export default StateSearch;