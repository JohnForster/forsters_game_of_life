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
        <Board  className='Board' columns={100} rows={50} />
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
    let cells = new Array(rows);
    for (let i = 0; i < rows; i++){
      cells[i] = new Array(columns).fill(false)
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
          <div className="board-row" key={'row' + i.toString()}>
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
            key={'r' + row.toString() + 'c' + column.toString()}
            cellStatus={this.state.cells[row][column]}
            onClick={() => this.handleClick(row, column)}
        />
    )
  }

  handleClick(row, column) {
    const cells = this.state.cells.slice();
    cells[row][column] = !cells[row][column];
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
