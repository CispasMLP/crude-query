import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Form from './components/form/Form';
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";

function App() {


  return (
    <>
    <Form/> 
    <Create/>
    <Delete/>
    <Update/>
    </>
  )
}

export default App
