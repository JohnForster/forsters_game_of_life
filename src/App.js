import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">John <s>Conway</s> Forster's</h2>
          <h1>Game of Life</h1>
          <h3>in React</h3>
        </header>
        <Board  columns={5} rows={10} />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cells: this.generateCells(props.rows, props.columns)
    };
  }
  generateCells(rows, columns) {
    let cells = new Array(columns);
    for (let i = 0; i < columns; i++){
      cells[i] = new Array(rows).fill(false)
    }
    return cells
  }

  render(){
    return (
        <div>
          {this.renderBoard()}
        </div>
    )
  }

  renderBoard() {
    let cells = this.state.cells;
    let board = [];
    for (let i = 0; i < cells.length; i++) {
      board.push(
          <div className="board-row">
            {this.renderRow(cells, i)}
          </div>
      )
    }
    return board
  }

  renderRow(cells, i) {
    let row = [];
    for (let j = 0; j < cells[0].length; j++) {
      row.push(this.renderCell(i, j))
    }
    return row;
  }

  renderCell(row, column) {
    return (
        <Cell
            cellStatus={this.state.cells[row][column]}
            onClick={() => this.handleClick(row, column)}
        />
    )
  }

  handleClick(row, column) {
    console.log(this.state.cells.slice())
    const cells = this.state.cells.slice();
    console.log(cells);
    cells[row][column] = !cells[row][column];
    console.log(cells);
    this.setState({
      cells: cells
    });
  }








}

function Cell(props) {
  let cellClasses = 'cell ' + (props.cellStatus ?  'active-cell' : 'inactive-cell');
  return (
    <button className={cellClasses} onClick={props.onClick} />
  )
}

export default App;
