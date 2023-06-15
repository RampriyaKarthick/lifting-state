
function StudentCard({oneStudent, handleExpelled}) {
  return (
    <div className="student-card">
    <img src={oneStudent.image} alt={oneStudent.name} width={75} />
    <h3>{oneStudent.name}</h3>
    <h3>House:{oneStudent.house}</h3>
    <h5>Half-blood:{oneStudent.muggle ? '✅' : '❌'}</h5>
    <h5>Actor:{oneStudent.actor}</h5>
    <button onClick={ () => {handleExpelled(oneStudent.name)} }>Expell</button>
    </div>
  );
}

export default StudentCard