
function StudentCard({oneStudent}) {
  return (
    <div className="student-card">
    <img src={oneStudent.img} alt={oneStudent.name} width={75} />
    <h3>{oneStudent.name}</h3>
    <h5>Muggle:{oneStudent.muggle ? '✅' : '❌'}</h5>
    </div>
  )
}

export default StudentCard