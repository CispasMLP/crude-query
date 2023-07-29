import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Form from './components/form/Form';
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";
import Table from "./components/table/Table";
import DenseTable from "./components/table/Table2";

function App() {


  return (
    <>
      <Create />
      <Form />
     
{/* 
      <Delete />
      <Update /> */}
    </>
  );
}

export default App
