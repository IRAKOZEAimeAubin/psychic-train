import womanProfile from './images/woman.png';
import manProfile from './images/man.png';

const TeamMemberCard = ( { employee, handleEmployeeCardClick, selectedTeam } ) => {
  return (
    <div key={ employee.id } id={ employee.id } className={ ( employee.teamName === selectedTeam ? "card m-2 p-2 standout" : "card m-2 p-2" ) } style={ { cursor: "pointer" } } onClick={ handleEmployeeCardClick }>

      { ( employee.gender === 'male' ) ? <img src={ manProfile } className="card-img-top" /> : <img src={ womanProfile } className="card-img-top" /> }

      <div className="card-body">
        <span><b>Full Name:</b> { employee.fullName }</span><br />
        <span><b>Designation:</b> { employee.designation }</span>
      </div>
    </div>
  )
}

export default TeamMemberCard