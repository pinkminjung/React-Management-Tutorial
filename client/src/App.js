import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
        { 
          customers.map( c => {
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
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
