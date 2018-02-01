import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

//line 7 manually put in
import { getAll } from '../data/pets';
const ALL_PETS = getAll();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  render() {
    debugger;
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ALL_PETS} onAdoptPet={false}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
