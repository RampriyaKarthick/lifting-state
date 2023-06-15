import {useEffect, useState} from "react";
import './App.css';
//import studentsJSON from './data.json'
import axios from "axios";
import AllStudents from "./components/AllStudents";
import SearchStudent from "./components/SearchStudent";
import NewStudent from "./components/NewStudent";
import StudentDetail from "./components/StudentDetail";


function App() {
const [students, setStudents] = useState([])
const [search, setSearch] = useState("");
const [showForm, setShowForm] = useState(false);
const [showDetails, setShowDetails] = useState(false);
const [studentDetail, setStudentDetail]=useState(null)
const[counter, setCounter]=useState(0);

//console.log(search);

//console.log("everytime!")
//mounting phase useeffect
useEffect(() => {
 console.log("this is the mounting phase");
 fetchCharacters();
// let intervalId = setInterval(() =>{
// setCounter((prev) => prev+1)
// },1000)
// return () => {
//   clearInterval(intervalId)
// }

}, []);

useEffect(() => {
  console.log('Details Changed')
}, [showDetails] )

const fetchCharacters = async() => {
  //this is with fetch
//const response = await fetch('https://hp-api.onrender.com/api/characters')
 //const parsed = await response.json()

//console.log('here are the new characters using fetch',parsed)
//this is with axios
//first way
// const response = await axios('https://hp-api.onrender.com/api/characters')
// const chars = res.data
const {data} = await axios('https://hp-api.onrender.com/api/characters')

console.log('here are the new characters using axios',data)
setStudents(data)

}

const handleShowForm = () => {
  console.log("show Form")
  setShowForm(!showForm)
}

const handleExpelled = (studentName) => {
console.log("hello you are expelled", studentName)
const filteredStudents = students.filter(student => {
  if(student.name !== studentName){
    return true;
  }
})
setStudents(filteredStudents)
};

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

const studentDetailFunc = (studentId) => {
let copyStudents = JSON.parse(JSON.stringify(students))
const filteredChar = copyStudents.filter((oneChar) => {
  if(oneChar.id === studentId){
    return true
  }
})

console.log("copyStudents", copyStudents);
console.log("here is the detailed char", filteredChar)
setStudentDetail(filteredChar[0])
setShowDetails(true)
}

  return (
    <div className="App">
      <h1>Hogwarts</h1>
      <h2>You are here since {counter} secs </h2>
      <button>Start Counter</button>
      <button onClick={handleSort}>Sort</button>
      <button onClick ={handleShowForm}>Show Form</button>
      <SearchStudent search={search} setSearch={setSearch} setStudents={setStudents} students={students}/>
      {showForm ? (<NewStudent allStudents={students} setStudents={setStudents}/> ) : null}
      {showDetails ? <StudentDetail student={studentDetail} /> : null}

      <StudentDetail studentDetail={studentDetail}/>
      <h2>Students:</h2>
      <AllStudents students={students} handleSetStudents ={setStudents} search={search} handleExpelled={handleExpelled} showDetails={showDetails}setShowDetails={setShowDetails} studentDetail={studentDetailFunc}/>
    </div>
  );
}

export default App;
