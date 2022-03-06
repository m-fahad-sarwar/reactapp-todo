import Logo from "../logo";

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container">
   <Logo/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-5" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="#">Services</a>
        </li>
        <li>
            <a href="" className="nav-link text-danger fw-bold">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Header;