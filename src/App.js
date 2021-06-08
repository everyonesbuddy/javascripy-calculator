import React, {useState} from 'react'
import './App.css';

function App() {
  const [expression, setExpression] = useState("")

  const display = (symbol) => {
    setExpression(prev => prev + symbol)
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">

        </div>
        <div onClick = {display} className="padButton AC tomato">AC</div>
        <div onClick = {display} className="padButton C tomato">C</div>
        <div onClick = {display} className="padButton div">/</div>
        <div onClick = {display} className="padButton times">*</div>
        <div onClick = {display} className="padButton seven dark-gray">7</div>
        <div onClick = {display} className="padButton eight dark-gray">8</div>
        <div onClick = {display} className="padButton nine dark-gray">9</div>
        <div onClick = {display} className="padButton minus">-</div>
        <div onClick = {display} className="padButton four dark-gray">4</div>
        <div onClick = {display} className="padButton five dark-gray">5</div>
        <div onClick = {display} className="padButton six dark-gray">6</div>
        <div onClick = {display} className="padButton plus">+</div>
        <div onClick = {display} className="padButton one dark-gray">1</div>
        <div onClick = {display} className="padButton two dark-gray">2</div>
        <div onClick = {display} className="padButton three dark-gray">3</div>
        <div onClick = {display} className="padButton equal blue">=</div>
        <div onClick = {display} className="padButton zero dark-gray">0</div>
        <div onClick = {display} className="padButton dot dark-gray">.</div>
      </div>

    </div>
  );
}

export default App;
