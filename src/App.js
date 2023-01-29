import './App.scss';
import { Chat } from './components/chat'

function App() {
  return (
    <div className="App container-fluid vh-100">
      <h1> Consulta tus problemas técnicos con nosotros</h1>
      <Chat/>
    </div>
  );
}

export default App;
