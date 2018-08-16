import React, { Component } from 'react';
import {calculateNextStep} from './Calculator';
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
        <div className="board-container">
          <Board  className='Board' columns={100} rows={50} />
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        rows: props.rows,
        columns: props.columns,
        cells: Board.generateCellArray(props.rows, props.columns),
        isLooping: false
    };
  }

  static generateCellArray(rows, columns) {
    let cells = new Array(rows);
    for (let i = 0; i < rows; i++){
      cells[i] = new Array(columns).fill(false)
    }
    return cells
  }

  nextStep() {
    let currentStep = this.state.cells.map(row => row.slice());
    let next = calculateNextStep(currentStep);
    this.setState({cells: next})
  }

  nextLoopStep(){
    if(this.state.isLooping){this.nextStep();}
  }

  componentDidMount() {
      this.interval = setInterval(() => this.nextLoopStep(), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startStepLoop(){
    this.setState({isLooping: true})
  }

  stopStepLoop(){
    this.setState({isLooping: false})
  }

  reset(){
    this.stopStepLoop();
    this.setState({cells: Board.generateCellArray(this.state.rows, this.state.columns)})
  }

  render(){
    return (
        <div>
          {this.renderBoard()}<br/>
          <button onClick={() => this.nextStep()}>Next Step</button>
          <button onClick={() => this.startStepLoop()}>Begin</button>
          <button onClick={() => this.stopStepLoop()}>Stop</button>
          <button onClick={() => this.reset()}>Reset</button>
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
