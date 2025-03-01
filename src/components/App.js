import React,{useReducer} from 'react';
import reducer, {initialState} from '../reducers'
import { changeOperation,applyNumber,clearDisplay,addMemory, clearMemory,addMemoryTotal, addToMemoryTotal } from '../actions';



import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)

  const handleCalcs = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperationClick = (operator) => {
    dispatch(changeOperation(operator))
  }
  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }
  
  const addToMemory =() =>{
    dispatch(addMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  const handleTotalMemory = () => {
    dispatch(addToMemoryTotal())
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={addToMemory}/>
              <CalcButton value={"MR"} onClick={handleTotalMemory}/>
              <CalcButton value={"MC"} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleCalcs(1)}/>
              <CalcButton value={2} onClick={() => handleCalcs(2)}/>
              <CalcButton value={3} onClick={() => handleCalcs(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleCalcs(4)}/>
              <CalcButton value={5} onClick={() => handleCalcs(5)}/>
              <CalcButton value={6} onClick={() => handleCalcs(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleCalcs(7)}/>
              <CalcButton value={8} onClick={() => handleCalcs(8)}/>
              <CalcButton value={9} onClick={() => handleCalcs(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationClick('+')}/>
              <CalcButton value={"*"} onClick={() => handleOperationClick('*')}/>
              <CalcButton value={"-"} onClick={() => handleOperationClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
