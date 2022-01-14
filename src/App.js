import './App.css';
import {useState} from 'react';

function App() {

  const [calcString, setCalcString] = useState('');

  // let calcString = '';

  function handleClick(e) {
    setCalcString(calcString + e.target.innerText);
  }

  function handleClearClick() {
    setCalcString('');
  }

  return (
    <div className='App'>
      <div className='calc-bg'>
        <div className='calc-outer-screen'>
          <div className='calc-inner-screen'><p>{ calcString }</p></div>
        </div>
        <div className='sp-section'>
          <div className='sp-inner'></div>
        </div>
        <div className="outer-btn-cont">
          <div className='btn-cont-1'>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>+/-</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>/</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>%</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>MRC</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>M-</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>M+</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>7</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>8</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>9</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>4</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>5</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>6</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>1</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>2</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>3</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClearClick}>ON/C</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>0</button>
            <button className='calc-wht-btn calc-btn-reg' onClick={handleClick}>.</button>
          </div>
          <div className='btn-cont-2'>
          <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>%</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>x</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>-</button>
            <button className='calc-red-btn calc-btn-reg' onClick={handleClick}>+</button>
            <button className='calc-red-btn calc-btn-reg calc-btn-lg' onClick={handleClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
