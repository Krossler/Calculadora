import React, { useState } from "react";
import "./calculadora.css"
import { Backspace } from "./backspace";
import { Division } from "./division";
import { Xmark } from "./xmark";



function Calculadora() {

  const [num, setNum] = useState(0);
  var [oldNum, setOldNum] = useState(0);
  const [cuenta, setCuenta] = useState(0);

  function inputNum(e){

    if (num === 0)
    setNum(e.target.value)
    else
      
      setNum(num + e.target.value)
    
  }

  function porcento(){
    if (num === 0)
    setNum(0)
    else  
      setNum(num / 100)
  }

  function clearNum(){
    setCuenta(0)
    setOldNum(0)
    setNum(0)
  }

  function rest(){
    setCuenta(1)
    setOldNum(num)
    setNum(0)
  }

  function suma(){
    setCuenta(2)
    setOldNum(num)
    setNum(0)
  }

  function dividir(){
    setCuenta(3)
    setOldNum(num)
    setNum(0)
  }

  function mult(){
    setCuenta(4)
    setOldNum(num)
    setNum(0)
  }

  function result(){

    if(cuenta===1){
    setNum(oldNum - num)
  }
    else if(cuenta===2){
      setNum (Number(oldNum) + Number(num))
    }
    
    else if(cuenta===3){
      if(Number(num)===0){
        setNum(0)
      }
      else(
      setNum(Number(oldNum) / Number(num)))
    }

    else if(cuenta===4){
      setNum(Number(oldNum) * Number(num))
    }

    else if (cuenta===0)
      setNum(num)
  }

  function clearLastNum(){

    const resultado = String(num)

    if(num < 10)
      setNum(0)
    else if(num < 100)
      setNum(resultado.substring(0,1))
    else if (num < 1000)
      setNum(resultado.substring(0,2))
    else if (num < 10000)
      setNum(resultado.substring(0,3))
    else if (num < 100000)
      setNum(resultado.substring(0,4))
    else if (num < 1000000)
      setNum(resultado.substring(0,5))
    else if (num < 10000000)
      setNum(resultado.substring(0,6))
  }

  return (
    <div className="bg">
      <div className="container">
        <div className="calculadora">
          <section>
            <div className="show">
              <h1 className="result">{num}</h1>
            </div>
            <div className="btns">
              <div>
                <button className="claro" id="c" onClick={clearNum} value={0}>C</button>
                <button className="claro" onClick={porcento}><p>%</p></button>
                <button className="claro" onClick={dividir}><Division/></button>
              </div>
              <div>
                <button onClick={inputNum} value={7}>7</button>        
                <button onClick={inputNum} value={8}>8</button>
                <button onClick={inputNum} value={9}>9</button>
                <button className="claro" onClick={mult}><Xmark/></button>
              </div>
              <div>
                <button onClick={inputNum} value={4}>4</button>
                <button onClick={inputNum} value={5}>5</button>
                <button onClick={inputNum} value={6}>6</button>
                <button className="claro" onClick={rest}><p>-</p></button>
              </div>
              <div>
                <button onClick={inputNum} value={1}>1</button>
                <button onClick={inputNum} value={2}>2</button>
                <button onClick={inputNum} value={3}>3</button>
                <button className="claro" onClick={suma}><p>+</p></button>
              </div>
              <div>
                <button onClick={inputNum} value={"."}>.</button>
                <button onClick={inputNum} value={0}>0</button>
                <button onClick={clearLastNum} ><Backspace/></button>
                <button className="claro" onClick={result}>=</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;

