import { Navbar } from "./components/Navbar";
import {ItemListContainer } from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer message='Proximamente encontraras tus productos!' />
    </>
  );
}

export default App;
