import { useState } from "react";
import Button from "./componentes/Button";
import Input from "./componentes/Input";
import { Container, Content, Row, Column } from "./sytylePrincipal";


function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [primeiroNumber, setPrimeiroNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const somaNumber = function(){
    
    if(primeiroNumber === '0'){
       setPrimeiroNumber(currentNumber);
       setCurrentNumber('0');
       setOperation('+');
    }else{
      const soma = Number(primeiroNumber) + Number(currentNumber);
      setCurrentNumber(String(soma))
      setOperation('');
    }

  }

  const menosNumber = function(){
    
    if(primeiroNumber === '0'){
       setPrimeiroNumber(currentNumber);
       setCurrentNumber('0');
       setOperation('-');
    }else{
      const soma = Number(primeiroNumber) - Number(currentNumber);
      setCurrentNumber(String(soma))
      setOperation('');
    }

  }

  const resultadoNumber = function(){
    
    if(primeiroNumber != '0' && operation != '' && currentNumber != '0'){
       switch(operation){
        case '+':
          somaNumber();
          break;
        case '-':
          menosNumber();
          break;
        default:
          break;
       }
    }

  }

  const removeNumber = function(number){
    setCurrentNumber('0');/* setando o '0' novamente (retornando ao inicio) */
    setPrimeiroNumber('0');
    setOperation('');
  }

  const addNumber = function(number){
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);/* Utilizando para ao ser zero permanecer, e ao reconhecer o number sendo digitado sobreecrever o '0' */
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>

        <Row>
          <Button label={"*"} onClick={() => addNumber('*')}/>
          <Button label={"/"} onClick={() => addNumber('/')}/>
          <Button label={"C"} onClick={removeNumber}/>
          <Button label={"X"} onClick={() => addNumber('X')}/>
        </Row>
        
        <Row>
          <Button label={"7"} onClick={() => addNumber('7')}/>
          <Button label={"8"} onClick={() => addNumber('8')}/>
          <Button label={"9"} onClick={() => addNumber('9')}/>
          <Button label={"-"} onClick={menosNumber}/>
        </Row>

        <Row>
          <Button label={"4"} onClick={() => addNumber('4')}/>
          <Button label={"5"} onClick={() => addNumber('5')}/>
          <Button label={"6"} onClick={() => addNumber('6')}/>
          <Button label={"+"} onClick={somaNumber}/>
        </Row>

        <Row>
          <Button label={"1"} onClick={() => addNumber('1')}/>
          <Button label={"2"} onClick={() => addNumber('2')}/>
          <Button label={"3"} onClick={() => addNumber('3')}/>
          <Button label={"="} onClick={resultadoNumber}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;