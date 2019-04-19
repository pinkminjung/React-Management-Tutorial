import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name': 'aaa',
    'birthday': '111',
    'gender': 'bbb',
    'job': 'ccc'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': 'aaa',
    'birthday': '111',
    'gender': 'bbb',
    'job': 'ccc'
  },{
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name': 'aaa',
    'birthday': '111',
    'gender': 'bbb',
    'job': 'ccc'
  }
]
class App extends Component {
  render() {
    return (
      <div>
        { customers.map( c => {
            return (
              <Customer
                key = {c.id}
                id = {c.id}
                name = {c.name}
                image = {c.image}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
