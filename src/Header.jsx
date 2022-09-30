const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <span className="title">Team Member Allocation</span>
          <span className="team-info">{selectedTeam} has {teamMemberCount} members</span>
        </div>
      </div>
    </header>
  )
}

export default Header