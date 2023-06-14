
function StudentCard({oneStudent, handleExpelled}) {
  return (
    <div className="student-card">
    <img src={oneStudent.img} alt={oneStudent.name} width={75} />
    <h3>{oneStudent.name}</h3>
    <h5>Half-blood:{oneStudent.muggle ? '✅' : '❌'}</h5>
    <button onClick={ () => {handleExpelled(oneStudent.name)} }>Expell</button>
    </div>
  );
}

export default StudentCard