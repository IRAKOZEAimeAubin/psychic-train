import womanProfile from './images/woman.png';
import manProfile from './images/man.png';

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className='col-6'>
          <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
          </select>
        </div>
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 p-2 standout" : "card m-2 p-2")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

                  {(employee.gender === 'male') ? <img src={manProfile} className="card-img-top" /> : <img src={womanProfile} className="card-img-top" />}

                  <div className="card-body">
                    <span><b>Full Name:</b> {employee.fullName}</span><br />
                    <span><b>Designation:</b> {employee.designation}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees