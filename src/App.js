import {useState} from "react";
import './App.css';
import studentsJSON from './data.json'
import AllStudents from "./components/AllStudents";
import SearchStudent from "./components/SearchStudent";

function App() {
const [students, setStudents] = useState(studentsJSON)
const [search, setSearch] = useState("");
console.log(search);

const handleSort = () => {
  console.log("clicked")
  //deep copy, super deep 
  const copyArray = JSON.parse(JSON.stringify(students))
  //deep shallow copy,not a real deep
  //const copyArray2 = [...students ]
  const sorted = copyArray.sort((a,b) =>{
    if(a.name> b.name){
      return 1
    }else if(a.name < b.name){
      return -1
    }else{
      return 0
    }
  })
  console.log('sorted', sorted);
  setStudents(sorted);
};

  return (
    <div className="App">
      <h1>Hogwarts</h1>
      <button onClick={handleSort}>Sort</button>
      <SearchStudent search={search} setSearch={setSearch} setStudents={setStudents} students={students}/>
      <AllStudents students={students} handleSetStudents ={setStudents} search={search}/>
    </div>
  );
}

export default App;
