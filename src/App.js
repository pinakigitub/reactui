import logo from './logo.svg';
import './App.css';
import {ChildOne} from "./ChildOne";
import { ChildTwo } from './ChildTwo';
import useUSerInfo from "./customHooks/useUserinfo";

function App() {
 const  name="Pianaki";
 const  surName="Mohapatra";
 const sfsdrg= useUSerInfo("op h");

  return (
    <div className="App">
      <div>sfr  {sfsdrg}</div>
      <ChildOne name={name}></ChildOne>
      <ChildTwo></ChildTwo>
    </div>
  );
}

export default App;
