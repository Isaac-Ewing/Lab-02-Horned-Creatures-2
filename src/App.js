import React from 'react';
import data from './data.js';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }
  handleChange = (e) => {
    let keys = '';
    if (e.target.value !== '')
      keys = String.fromCharCode(e.target.value[0].charCodeAt(0) + 32) + e.target.value.substring(1, e.target.value.length)
    this.setState({keyword: keys});
  }
  handleHornChange = (e) => {
    this.setState({horns: e.target.value});
  }
  render() {
    let pics = data;
    if (this.state.keyword !== '') {
      pics = pics.filter(animal => animal.keyword === this.state.keyword);
    }
    if (this.state.horns !== '') {
      pics = pics.filter(item => Number(item.horns) === Number(this.state.horns));
    }
    let animalOptions = Array.from(new Set(data.map(data => data.keyword)));
    animalOptions = animalOptions.map(animal => (String.fromCharCode(animal[0].charCodeAt(0) - 32) + animal.substring(1, animal.length)))
    const hornsOptions = Array.from(new Set(data.map(data => data.horns)));
    return (
      <div className="App">
        <Header/>
        <Dropdown options={animalOptions} handleChange={this.handleChange}/>
        <Dropdown options={hornsOptions} handleChange={this.handleHornChange}/>
        <div>
          <ImageList images={pics}/>
        </div>
      </div>
    );
  }
}