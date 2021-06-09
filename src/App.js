import React from 'react';
import data from './data.js';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }
  handleChange = (e) => {
    this.setState({keyword: e.target.value});
  }
  handleHornChange = (e) => {
    this.setState({horns: e.target.value});
  }
  render() {
    let pics = data;
    if (this.state.keyword !== '') {
      pics = pics.filter(animal => animal.keyword === this.state.keyword);
    }
    if (this.state.horns !== '' && this.state.horns !== '4') {
      pics = pics.filter(item => Number(item.horns) === Number(this.state.horns));
    }
    if (this.state.horns === '4') {
      pics = pics.filter(item => Number(item.horns) >= Number(this.state.horns));
    }
    return (
      <div className="App">
        <Header/>
        <label>
          <select onChange={this.handleChange}>
            <option value="">--select--</option>
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Unilego</option>
            <option value="triceratops">Triceratops</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="addax">Addax</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
          </select>
        </label>
        <label>
          <select onChange={this.handleHornChange}>
            <option value="">--select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </label>
        <div>
          <ImageList images={pics}/>
        </div>
      </div>
    );
  }
}