import StudentCard from "./StudentCard";


function AllStudents({students,handleSetStudents,search,handleExpelled, showDetails,setShowDetails,studentDetail}) {
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
        return <StudentCard key={student.id} oneStudent={student} handleExpelled={handleExpelled} showDetails={showDetails} setShowDetails={setShowDetails} studentDetail={studentDetail} />;
      })}
  </>
  )
}

export default AllStudents