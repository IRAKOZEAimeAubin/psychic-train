const Footer = () => {
  let today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <span className="footer">Team Member App Allocation - {today.getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer