import StudentCard from "./StudentCard";


function AllStudents({students,handleSetStudents,search}) {
    console.log("All students",students);
  return (
   <>
    {students
    .filter((oneFilteredStudent) => {
        if(oneFilteredStudent.name.toLowerCase().includes(search.toLowerCase())){
        return true
    }
    })
    .map((student) => {
        return(
           <StudentCard key={student.name} oneStudent={student}/>

        )
    })}
   </>
  )
}

export default AllStudents