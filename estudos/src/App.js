import './App.css';
import Button from './componentes/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <Button title={'Salvar'}/>
        <Button title={'Excluir'}/>
        <Button title={'Editar'}/>
      </header>
    </div>
  );
}

export default App;
