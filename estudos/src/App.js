import { useState } from "react";
import Button from "./componentes/Button";
import Input from "./componentes/Input";
import { Container, Content, Row, Column } from "./sytylePrincipal";


function App() {

  const [currentNumber, setCurrentNumber] = useState('0');

  

  const removeNumber = function(number){
    setCurrentNumber('0');/* setando o '0' novamente (retornando ao inicio) */
  }

  const addNumber = function(number){
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)/* Utilizando para ao ser zero permanecer, e ao reconhecer o number sendo digitado sobreecrever o '0' */
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
          <Button label={"-"} onClick={() => addNumber('-')}/>
        </Row>

        <Row>
          <Button label={"4"} onClick={() => addNumber('4')}/>
          <Button label={"5"} onClick={() => addNumber('5')}/>
          <Button label={"6"} onClick={() => addNumber('6')}/>
          <Button label={"+"} onClick={() => addNumber('+')}/>
        </Row>

        <Row>
          <Button label={"1"} onClick={() => addNumber('1')}/>
          <Button label={"2"} onClick={() => addNumber('2')}/>
          <Button label={"3"} onClick={() => addNumber('3')}/>
          <Button label={"="} onClick={() => addNumber('=')}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;