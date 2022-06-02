import './App.css';
import NavBar from './component/NavBar'
import ItemListContainer from './component/ItemListContainer'
const greeting = 'He aqui mi catalogo!'
function App() {
  return <>
    <NavBar />
    <ItemListContainer greeting = {greeting}/>
  </>;
}

export default App;
 