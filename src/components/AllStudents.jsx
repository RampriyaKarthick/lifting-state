import StudentCard from "./StudentCard";


function AllStudents({students,handleSetStudents,search}) {
    console.log("All students",students);
    const searchLowerCase = search.toLowerCase();
  return (
    <>
    {students
      .filter((oneFilteredStudent) => {
        const nameLowerCase = oneFilteredStudent.name.toLowerCase(); // Convert student name to lowercase
        if (nameLowerCase.includes(searchLowerCase) && nameLowerCase.startsWith(searchLowerCase)) {
          return true;
        }
        return false;
      })
      .map((student) => {
        return <StudentCard key={student.name} oneStudent={student} />;
      })}
  </>
  )
}

export default AllStudents